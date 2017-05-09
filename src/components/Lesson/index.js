import React, {Component} from 'react';
import styles from './Lesson.css';

const Lesson = ({lesson}) => {
  const {content, questions, title} = lesson;
  const {images, text} = content;

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      {
        text.split('.').map((p, i) =>
          <p className={styles.paragraph} key={i}>{p}.</p>
        )
      }
      {
        images.map(img =>
          <img src={img} alt="lesson-image" key={img}/>
        )
      }
    </div>
  );
}

export default Lesson;
