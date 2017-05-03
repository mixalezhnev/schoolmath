import React from 'react';
import styles from './ContentList.css'

export default({data}) => (
  <div className={styles.contentList}>
    <h2 className={styles.heading}>Содержание</h2>
    <ul className={styles.list}>
      {data.map(subject =>
        <li key={subject.title}>
          <a href="" className={styles.anchor}>{subject.title}</a>
        </li>
      )}
    </ul>
  </div>
)
