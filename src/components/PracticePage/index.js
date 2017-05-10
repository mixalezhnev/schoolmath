import React from 'react';

import PracticePageProgress from '../../containers/PracticePageProgress';
import ContentList from '../../containers/ContentList';
import TrainingBlock from '../../containers/TrainingBlock';
import Modal from '../../containers/Modal';

import styles from './Practice.css';

const PracticePage = () => {
  return (
    <div>
      <PracticePageProgress/>
      <div className={styles.container}>
        <ContentList />
        <TrainingBlock />
        <Modal />
      </div>
    </div>
  );
}

export default PracticePage;
