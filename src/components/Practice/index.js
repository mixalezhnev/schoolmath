import React from 'react';

import PracticeProgress from '../PracticeProgress';
import ContentList from '../ContentList';
import TrainingBlock from '../TrainingBlock';
import Modal from '../Modal';

import styles from './Practice.css';

const Practice = ({data, progress}) => (
  <div>
    <PracticeProgress progress={progress}/>
    <div className={styles.container}>
      <ContentList data={data}/>
      <TrainingBlock data={data}/>
      <Modal/>
    </div>
  </div>
);

export default Practice;
