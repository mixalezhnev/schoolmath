import React from 'react';
import OverviewProgress from '../../containers/OverviewProgress';

import styles from './Practice.css';

const Practice = ({data}) => (
  <div>
    <OverviewProgress />
    <div className={styles.container}>
      <div className={styles.contentList}
        style={{
          position: 'fixed'
        }}>
        <h3>Содержание</h3>
        <ul style={{
          maxWidth: '300px',
          lineHeight: '22px'
        }}>
          {data.map(item => <li key={item.title}>{item.title}</li>)}
        </ul>
      </div>
      <div className={styles.content}></div>
    </div>
  </div>
);

export default Practice;
