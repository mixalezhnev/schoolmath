import React from 'react';
import PracticeProgress from '../PracticeProgress';
import ContentList from '../ContentList';

import styles from './Practice.css';

const Practice = ({data, progress}) => (
  <div>
    <PracticeProgress progress={progress}/>
    <div className={styles.container}>
      <ContentList data={data}/>
      <div className={styles.content}>

      </div>
    </div>
  </div>
);

export default Practice;
