"use client";

import React from 'react';
import styles from '../styles/Home.module.css';

interface CallButtonProps {
  isCalling: boolean;
  toggleConversation: () => void;
}

const CallButton: React.FC<CallButtonProps> = ({ isCalling, toggleConversation }) => {
  return (
    <button className={styles.button} onClick={toggleConversation}>
      {isCalling ? "Stop" : "Start"}
    </button>
  );
};

export default CallButton;