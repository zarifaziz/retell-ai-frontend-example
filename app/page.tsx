"use client";

import React, { useEffect, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import CallButton from "./components/CallButton";
import CallStatus from "./components/CallStatus";
import ThankYouMessage from "./components/ThankYouMessage";
import styles from "./styles/Home.module.css";

interface RegisterCallResponse {
  access_token: string;
}

const retellWebClient = new RetellWebClient();

const Home = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    retellWebClient.on("call_started", () => {
      console.log("call started");
    });

    retellWebClient.on("call_ended", () => {
      console.log("call ended");
      setIsCalling(false);
      setShowThankYou(true);
    });

    retellWebClient.on("error", (error) => {
      console.error("An error occurred:", error);
      retellWebClient.stopCall();
    });
  }, []);

  const toggleConversation = async () => {
    if (isCalling) {
      retellWebClient.stopCall();
    } else {
      const registerCallResponse = await registerCall();
      if (registerCallResponse.access_token) {
        retellWebClient
          .startCall({
            accessToken: registerCallResponse.access_token,
          })
          .catch(console.error);
        setIsCalling(true);
        setShowThankYou(false);
      }
    }
  };

  async function registerCall(): Promise<RegisterCallResponse> {
    try {
      const response = await fetch("/api/register-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: RegisterCallResponse = await response.json();
      return data;
    } catch (err) {
      console.log(err);
      throw new Error(String(err));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <CallButton isCalling={isCalling} toggleConversation={toggleConversation} />
        <CallStatus isCalling={isCalling} />
        <ThankYouMessage show={showThankYou} />
      </div>
    </div>
  );
};

export default Home;