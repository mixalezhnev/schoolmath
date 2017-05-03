import React from 'react';
import Button from '../Button';

import styles from './Exercise.css';

 const Exercise = ({data}) => {
  const {title, icon, lessons} = data;
  return (
    <div className={styles.container}>
      <img href={icon} className={icon}/>
      <div className={styles.title}>{title}</div>
      <button className={styles.button}>Старт</button>
    </div>
  )
}

export default Exercise;
