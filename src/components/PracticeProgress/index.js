import React from 'react';

import styles from './PracticeProgress.css';

 const PracticeProgress = ({progress}) => {
  const {completed, percentage, total, next} = progress;
  const isStart = completed == 0;
  const isFinish = completed == total;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.missionAction}>
          <span>{
              isStart ?
                'Начать миссию' :
                isFinish ?
                  'Миссия завершена' :
          'Продолжить миссию'}
          </span>
        </div>
        <div className={styles.missionNext}>
          <span>
            Следующее задание: {next}
          </span>
        </div>
        <button className={styles.startBtn}>Старт</button>
        <div className={styles.progress}>
          <div className={styles.bar} style={{
            width: percentage + '%'
          }}></div>
        </div>
        <div className={styles.details}>
          {completed} / {total} заданий завершено
        </div>
      </main>
    </div>
  );
}

export default PracticeProgress;
