import React from 'react';

import PracticePageProgress from '../../containers/PracticePageProgress';
import ContentList from '../../containers/ContentList';
import TrainingBlock from '../../containers/TrainingBlock';
import Modal from '../../containers/Modal';

import styles from './Practice.css';

const PracticePage = ({ subject }) => {
  return subject ?
    (<div>
      <TrainingBlock subject={subject} />
      <Modal />
    </div>) :
    (<div>
      <PracticePageProgress/>
      <div className={styles.container}>
        <ContentList />
        <TrainingBlock />
        <Modal />
      </div>
    </div>)
}

export default PracticePage;
