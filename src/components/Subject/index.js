import React from 'react';
import styles from './Subject.css';
import Navigation from '../Navigation';

const Subject = ({params, children}) => (
  <div className={styles.container}>
    <Navigation/>
    <div>{params}</div>
    <div>{children}</div>
  </div>
)

export default Subject;
