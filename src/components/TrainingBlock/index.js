import React from 'react';
import Training from '../Training';

import styles from './TrainingBlock.css';

const TrainingBlock = ({ progress, data, getExercise }) => (
  <div className={styles.container}>
    {data.map(subject => (
      <Training
        subject={subject}
        getExercise={getExercise}
        key={subject.title}/>
    ))}
  </div>
);

export default TrainingBlock;
