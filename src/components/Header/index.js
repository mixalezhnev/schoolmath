import React from 'react';
import Auth from '../Auth';
import SearchBox from '../../containers/SearchBox';

import { Link } from 'react-router';
import { auth } from '../../firebaseApp';

import styles from './Header.css';
import logo from './logo.svg';

const Header = () => {
  const isAnonymous = !auth.currentUser || auth.currentUser.isAnonymous; 

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to='/'>
            <img src={logo} className={styles.logoIcon} alt='Math starts here' />
          </Link>
        </div>
        <div className={ isAnonymous ? styles.rightBlock : styles.reversed }>
          <div className={styles.auth}>
            <Auth />
          </div>
          <div className={styles.searchBox}>
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
