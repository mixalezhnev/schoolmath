import React from 'react';

import Header from '../Header';
import Navigation from '../Navigation';

// import styles from './Subject.css';

const Subject = ({params, children}) => {
  const curSubject = params.subject;
  const paths = [
    {
      title: 'Обзор раздела',
      subject: '',
      path: `/subject/${curSubject}/overview`
    },
    {
      title: 'Практикум',
      subject: '',
      path: `/subject/${curSubject}/practice`
    }
  ]
  return (
    <div>
      <Header flag='subject'/>
      <Navigation pages={paths} flag='subject'/>
      {children}
    </div>
  );
}

export default Subject;
