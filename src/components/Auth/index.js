import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebaseApp';

import styles from './Auth.css';

const Auth = ({ isAnonymous = false}) => {
  isAnonymous = !auth.currentUser || auth.currentUser.isAnonymous; 

  return !isAnonymous ? (
    <div className={styles.profile}>
      <div className={styles.userIcon} onClick={ () => {} }></div> 
      <Link to='/profile' className={styles.profileLink}>{ auth.currentUser.displayName }</Link>
    </div>) : (
    <div className={styles.authGroup}>
      <Link to='/auth/signup'>
        <span className={styles.createAccount}>Создать аккаунт</span>
      </Link>
      <div className={styles.signIn}>
        <Link to='/auth/signin' className={styles.signInLink}>Войти</Link>
      </div>
    </div>)
  }

export default Auth;
