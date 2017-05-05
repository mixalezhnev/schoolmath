import React from 'react';
import {Link} from 'react-router';
import FaBeer from 'react-icons/lib/fa/angle-left';

import ContentList from '../ContentList';

import styles from './SubjectOverview.css';

const SubjectOverview = ({data, params}) => {
  const targetSubject = data.filter(subject =>
    subject.url == params.subject
  )[0];

  return (
    <div>
      <div className={styles.bigTitle}>
        <div className={styles.back}>
          <Link to='/' className={styles.linkBack}>
            <FaBeer size={30}/>
            <span>к обзору разделов</span>
          </Link>
          <h2 className={styles.title}>{targetSubject.title}</h2>
        </div>
      </div>
      <div className={styles.container}>
        <ContentList data={targetSubject.lessons} />
      </div>
    </div>
  );
}

export default SubjectOverview;
