import React from 'react';

import styles from './StateStar.css';

const StateStar = ({ subject, lesson, progress }) => {
  const state = progress[subject] &&
                        progress[subject][lesson] &&
                        progress[subject][lesson].completed;

  const curClass = `${state ? styles.completed : styles.notCompleted} ${styles.star}`;
  return (
    <svg className={curClass}>
      <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477
        10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373
        12-12 12z M8.748 17.434a.5.5 0 0 1-.744-.496l.47-3.757-2.328-2.327a.5.5
        0 0 1 .283-.849l3.258-.465 1.879-3.288a.5.5 0 0 1 .868 0l1.879 3.288
        3.258.465a.5.5 0 0 1 .283.849l-2.328 2.327.47 3.757a.5.5 0 0
        1-.744.496L12 15.576l-3.252 1.858z M12 22c5.523 0 10-4.477 10-10S17.523
        2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0
        12 0s12 5.373 12 12-5.373 12-12 12z'></path>
    </svg>
  );
}

export default StateStar;
