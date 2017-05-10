import React, {Component} from 'react';

import { createHTML } from '../../ulits';

import styles from './Lesson.css';


const Lesson = ({lesson}) => {
  const {content, title} = lesson;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div dangerouslySetInnerHTML={createHTML(content)} className={styles.content}></div>
    </div>
  );
}

export default Lesson;
