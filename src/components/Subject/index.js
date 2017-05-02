import React from 'react';
import Navigation from '../Navigation';

import styles from './Subject.css';

const paths = [
  {
    title: 'Обзор курса',
    path: ''
  },
  {
    title: 'Практикум',
    path: ''
  }
];

const Subject = ({params, children}) => (
  <div>
    <Navigation pages={paths}/>
    <div className={styles.container}>
      {children}
    </div>
  </div>
)

export default Subject;
