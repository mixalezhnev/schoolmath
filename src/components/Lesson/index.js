import React from 'react';

import { Link } from 'react-router';

import { createHTML } from '../../ulits';

import styles from './Lesson.css';

const Lesson = ({ lesson, params }) => {
  const { content, title } = lesson;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div dangerouslySetInnerHTML={createHTML(content)} className={styles.content}></div>
      <Link to={`/`} className={styles.startButton}>Закрепить урок</Link>
    </div>
  );
}

export default Lesson;
