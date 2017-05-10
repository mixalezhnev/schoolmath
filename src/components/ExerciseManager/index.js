import React from 'react';

import styles from './ExerciseManager.css';

const ExerciseManager = ({ exercise })  => (
  <div className={styles.container}>
    <section className={styles.content}>{exercise.question}</section>
  </div>
  );

export default ExerciseManager;
