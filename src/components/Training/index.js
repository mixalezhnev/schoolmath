import React from 'react';

import {Link} from 'react-router';

import StateStar from '../StateStar';
import styles from './Training.css';

const Training = ({subject}) => (
  <div className={styles.container} id={subject.url}>
    <div className={`${styles.heading} ${styles.group}`}>
      <div className={styles.group}>
        <img src={subject.icon} alt={subject.title} className={styles.icon}/>
        <Link to={`/subject/${subject.url}/practice`} className={styles.title}>{subject.title}</Link>
      </div>
      <div className={styles.group}>
        <button className={styles.startBtn}>Старт</button>
      </div>
    </div>
    <div className={styles.lessonBlock}>
      {subject.lessons.map(lesson => (
        <div className={styles.lesson} key={lesson.title}>
          <StateStar state={lesson.completed}/>
          <div className={styles.lessonTitle} key={lesson.title}>
            {lesson.title}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Training;
