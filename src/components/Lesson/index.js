import React from 'react';
import styles from './Lesson.css';

const Lesson = ({lesson}) => (
  <div className={styles.content}>
    <h2 className={styles.title}>{lesson.title}</h2>
    {
      lesson.content.split('.').map((p, i) =>
        <p className={styles.paragraph} key={i}>{p}.</p>
      )
    }
  </div>
);

export default Lesson;
