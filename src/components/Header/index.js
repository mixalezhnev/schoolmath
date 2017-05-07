import React from 'react';
import Auth from '.././Auth';
import SearchBox from '../SearchBox';

import {Link} from 'react-router';

import styles from './Header.css';
import logo from './logo.svg';

const Header = ({flag}) => {
  flag = flag == 'subject';

  return (
    <div className={flag ? `${styles.header} ${styles.transparent}` : styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to='/'>
            <img src={logo} className={styles.logoIcon} alt='Math starts here' />
          </Link>
        </div>
        <div className={styles.rightBlock}>
          <SearchBox bordered={flag}/>
          <Auth flag={flag}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
