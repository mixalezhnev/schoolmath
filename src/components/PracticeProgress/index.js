import React from 'react';

import styles from './PracticeProgress.css';

export default (completed, total, next) => {
  const isStart = completed < total;
  const isFinish = completed == total;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progress}>
        <div className={styles.mission}>
          <div>
            {isStart ?
              <span className={styles.missionAction}>Начать миссию</span> :
              isFinish ?
                <span className={styles.missionAction}>Миссия завершена</span> :
              <span className={styles.missionAction}>Продолжить миссию</span>
            }
            <div className={styles.missionNext}>
              <span>Следующее задание: {next}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
