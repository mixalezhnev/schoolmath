import React from 'react';
import Navigation from '../Navigation';

import styles from './Subject.css';

const paths = [
  {
    title: 'Обзор курса',
    path: 'subject/subject-overview'
  },
  {
    title: 'Практикум',
    path: 'subject/subject-practice'
  }
];

const Subject = ({params, children}) => {
  return (
    <div>
      <Navigation pages={paths}/>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}

export default Subject;
