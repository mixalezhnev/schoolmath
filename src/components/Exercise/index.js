import React from 'react';
import styles from './Exercise.css';

export default ({data}) => (
  <div className={styles.container}>
    <div className={styles.statusIcon}></div>
    <span className={styles.title}>{data.title}</span>
  </div>
);
