import React from 'react';

import {Link} from 'react-router';

import styles from './ContentList.css';

const ContentList = ({ data, subjRoute }) => {
  return(
    <div className={styles.contentList}>
      <h2 className={styles.heading}>Содержание</h2>
      <ul className={styles.list}>
        {data.map(subject =>
          <li key={subject.title}>{
            subjRoute != undefined ?
              <Link to={`/subject/${subjRoute}/overview/${subject.id}`}
                className={styles.anchor}
                activeClassName={styles.activeAnchor}
                onlyActiveOnIndex={true}>{subject.title}</Link> :
            <a href={`#${subject.url}`} className={styles.anchor}>{subject.title}</a>
          }
          </li>
        )}
      </ul>
    </div>
  )
}

export default ContentList;
