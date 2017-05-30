import React from 'react';

import ProgressIcon from '../ProgressIcon';
import StartUp from '../StartUp';
import Button from '../Button';

import styles from './OverviewProgress.css';

import {Link} from 'react-router';

const OverviewProgress = ({percentage, next,}) => {
  const isStart = percentage == 0;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progress}>
        {isStart
          ? <StartUp/>
          : <ProgressIcon total={percentage}/>
				}
        <div className={styles.mission}>
          <div>
            <span className={styles.missionAction}>{isStart
                ? 'Начать '
						: 'Продолжить '}
						миссию</span>
            <div className={styles.missionNext}>
              <p className={styles.next}>Следующее задание:</p>
              <p className={styles.nextTitle}>{next}</p>
            </div>
          </div>
          <div className={styles.btnGroup}>
            <Link to='/practice'>
              <button className={styles.btn}>Старт</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OverviewProgress;
