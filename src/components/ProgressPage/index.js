import React from 'react';

import ProgressIcon from '../ProgressIcon';

import styles from './ProgressPage.css';

const Progress = ({ progress, data }) => {
  const { completed, total } = progress;
  const percent = completed * 100 / total ^ 0;

  const { subjects } = progress;

  return (
    <div className={styles.container}>
      <div  className={styles.progressBlock}>
        <div>
          <h2  className={styles.title}>Общий прогресс</h2>
        </div>
        <div className={styles.progress}>
          <ProgressIcon total={percent} radius={70}/>
        </div>
      </div>
      <div className={styles.statsBlock}>
        <div>
          <h2 className={styles.title}>Прогресс по разделам</h2>
        </div>
        <div className={styles.stats}>
          {data.map(subject =>
            <div className={styles.subjectBlock} key={subject.id}>
              <div>
                <span className={styles.subjectTitle}>{subject.title}</span>
              </div>
              <div className={styles.statusContainer}>
                {subject.lessons.map(lesson =>
                  <div className={subjects[subject.id] && subjects[subject.id][lesson.id] && subjects[subject.id][lesson.id].completed ? styles.statusCompleted: styles.lessonStatus} key={lesson.id}></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Progress;
