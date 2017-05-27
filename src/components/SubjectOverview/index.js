import React from 'react';
import {Link} from 'react-router';
import FaBack from 'react-icons/lib/fa/angle-left';

import ContentList from '../ContentList';

import styles from './SubjectOverview.css';

const SubjectOverview = ({data, children, params}) => {

  const targetSubject =
    data.length === 0 ? {
      description: '',
      title: '',
      lessons: []
    } :  data.find(subject =>
      subject.id == params.subject);

  return (
    <div>
      <div className={styles.bigTitle}>
        <div className={styles.titleGroup}>
          <Link to='/' className={styles.linkBack}>
            <FaBack size={24} className={styles.backIcon}/>
            <span className={styles.backText}>К обзору разделов</span>
          </Link>
          <h2 className={styles.title}>{targetSubject.title}</h2>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.flex}>
          <ContentList
            data={targetSubject.lessons}
            subjRoute={params.subject}
          />
          <div className={styles.desc}>
            <p className={styles.descText}>{targetSubject.description}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default SubjectOverview;
