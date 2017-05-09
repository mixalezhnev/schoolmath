import React, {Component} from 'react';
import styles from './Lesson.css';

const Lesson = ({lesson}) => {
  const {content, questions, title} = lesson;
  const {images, text} = content;

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.imageContainer}>
        <img src={images[0]} alt='lesson-image'/>
      </div>
      {
        text.split('.').map((p, i) =>
          <p className={styles.paragraph} key={i}>{p}.</p>
        )
      }
      <div className={styles.imageContainer}>
        <img src={images[images.length - 1]} alt='lesson-image'/>
      </div>
      <div className={styles.questionBlock}>
        <h2 className={styles.questions}>Контрольные вопросы:</h2>
        <ul className={styles.qList}>
          {questions.map((q, i) =>
            <li key={i}>{q}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Lesson;
