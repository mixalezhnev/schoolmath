import React from 'react';

import styles from './PracticePageProgress.css';

 const PracticePageProgress = ({ progress }) => {
  const {completed, percentage, total, nextTitle} = progress;
  const isStart = completed == 0;
  const isFinish = completed == total;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.missionAction}>
          <p className={styles.action}>{
              isStart ?
                'Начать миссию' :
                isFinish ?
                  'Миссия завершена' :
          'Продолжить миссию'}
          </p>
        </div>
        <div className={styles.missionNext}>
          <span className={styles.next}>
            Следующее задание: {nextTitle}
          </span>
        </div>
        <button className={styles.startBtn}>Старт</button>
        <div className={styles.progress}>
          <div className={styles.bar} style={{
            width: `${percentage}%`
          }}></div>
        </div>
        <div className={styles.details}>
          {completed} / {total} заданий завершено
        </div>
      </div>
    </div>
  );
}

export default PracticePageProgress;
