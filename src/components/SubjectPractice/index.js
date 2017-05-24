import React from 'react';

import styles from './SubjectPractice.css';

import PracticePage from '../PracticePage';

const SubjectPractice = ({ params }) => (
  <div className={styles.container}>
    <PracticePage subject={ params.subject }/>
  </div>
);

export default SubjectPractice;
