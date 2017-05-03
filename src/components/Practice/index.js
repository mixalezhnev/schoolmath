import React from 'react';
import OverviewProgress from '../../containers/OverviewProgress';
import ContentList from '../ContentList';
import SubjExercise from '../SubjExercise';

import styles from './Practice.css';

const Practice = ({data}) => (
  <div>
    <OverviewProgress />
    <div className={styles.container}>
      <ContentList data={data}/>
      <div className={styles.content}>
        {data.map(subject =>
          <SubjExercise data={subject} key={subject.title}/>
        )}
      </div>
    </div>
  </div>
);

export default Practice;
