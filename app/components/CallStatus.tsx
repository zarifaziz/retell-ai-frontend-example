"use client";

import React from 'react';
import styles from '../styles/Home.module.css';

interface CallStatusProps {
  isCalling: boolean;
}

const CallStatus: React.FC<CallStatusProps> = ({ isCalling }) => {
  return (
    <div className={styles.status}>
      {isCalling ? "In Call" : "Call Ended"}
    </div>
  );
};

export default CallStatus;