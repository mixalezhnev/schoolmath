import React from 'react';
import Training from '../Training';

import styles from './TrainingBlock.css';

const TrainingBlock = ({ subject, data, getExercise }) => {
  data = subject ? data.filter(subj => subj.id == subject) : data;
  return (
    <div className={styles.container}>
      { data.map(subject => (
        <Training
          subject={subject}
          getExercise={getExercise}
          key={subject.title}/>
      ))}
    </div>
  );
}

export default TrainingBlock;
