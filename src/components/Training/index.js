import React from 'react';

import { Link } from 'react-router';

import StateStar from '../../containers/StateStar';
import styles from './Training.css';

const Training = ({ subject, getExercise }) => (
  <div className={styles.container} id={subject.url}>
    <div className={`${styles.heading} ${styles.group}`}>
      <div className={styles.group}>
        <img src={subject.icon} alt={subject.title} className={styles.icon}/>
        <Link to={`/subject/${subject.id}/practice`} className={styles.title}>{subject.title}</Link>
      </div>
      <div className={styles.group}>
        <button className={styles.startBtn} onClick={() => {getExercise({subject: subject.id})}}>Старт</button>
      </div>
    </div>
    <div className={styles.lessonBlock}>
      {subject.lessons.map(lesson => (
        <div className={styles.lesson} key={lesson.title}>
          <StateStar subject={subject.id} lesson={lesson.id} />
          <div
            className={styles.lessonTitle}
            onClick={() => {getExercise({lesson: lesson.id, subject: subject.id, title: lesson.title})}}
            key={lesson.title}>
            {lesson.title}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Training;
