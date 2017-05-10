import React from 'react';

import styles from './ModalStatusBar.css';

const ModalStatusBar = ({ exercises }) => (
  <div className={styles.status}>
    {exercises.map((ex, i) =>
      <div className={ex.completed ? styles.exStatusCompleted : styles.exStatus}
        key={i}>
      </div>
    )}
  </div>
)

export default ModalStatusBar;
