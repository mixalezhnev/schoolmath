import React from 'react';
import Button from '../Button';
import Exercise from '../Exercise';

import {Link} from 'react-router';


import styles from './SubjExercise.css';

 const SubjExercise = ({data}) => {
  const {title, icon, lessons, url} = data;
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.headingLogo}>
          <img src={icon} className={styles.icon}/>
          {/* Куда должна вести ссылка, но пока не ведет */}
          <Link to={`/subject/${url}/practice`} className={styles.title}>{title}</Link>
        </div>
        <button className={styles.button}>Старт</button>
      </div>
      <div className={styles.exerciseContainer}>
        {lessons.map(lesson => {
          <Exercise data={lesson}/>
        })}
      </div>
    </div>
  )
}

export default SubjExercise;
