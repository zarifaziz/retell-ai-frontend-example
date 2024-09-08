"use client";

import React from 'react';
import styles from '../styles/Home.module.css';

interface ThankYouMessageProps {
  show: boolean;
}

const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ show }) => {
  return (
    show ? <div className={styles.thankYouMessage}>Thank you! The interview is complete.</div> : null
  );
};

export default ThankYouMessage;