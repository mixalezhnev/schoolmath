import React from 'react';
import {Link} from 'react-router';
import FaBack from 'react-icons/lib/fa/angle-left';

import ContentList from '../ContentList';

import styles from './SubjectOverview.css';

const SubjectOverview = ({data, children, params}) => {
  const targetSubject = data.filter(subject =>
    subject.url == params.subject
  )[0];

  return (
    <div>
      <div className={styles.bigTitle}>
        <Link to='/' className={styles.linkBack}>
          <FaBack size={24}/>
          <span className={styles.backText}>К обзору разделов</span>
        </Link>
        <h2 className={styles.title}>{targetSubject.title}</h2>
      </div>
      <div className={styles.container}>
        <ContentList data={targetSubject.lessons} subjRoute={params.subject}/>
        {children}
      </div>
    </div>
  );
}

export default SubjectOverview;
