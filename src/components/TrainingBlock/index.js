import React from 'react';
import Training from '../Training';

import styles from './TrainingBlock.css';

const TrainingBlock = ({data}) => (
  <div className={styles.container}>
    {data.map(subject => (
      <Training subject={subject} key={subject.title}/>
    ))}
  </div>
);

export default TrainingBlock;
