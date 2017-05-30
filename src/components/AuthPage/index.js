import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './AuthPage.css';

const AuthPage = ({children, location}) => {
  const path = location.pathname.split('/')[2];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.branding}></div>
          <h1 className={styles.action}>
            {path == 'signin' ? 'Войти' : 'Создать аккаунт'}
          </h1>
        </header>
        <div className={styles.wrapperBody}>
          <div className={styles.googleAuth}> </div>
          <div className={styles.horizontalLine}>
            <span className={styles.horizontalText}>
              или
            </span>
          </div>
          <div className={styles.form}>
            {children}
          </div>
        </div>
      </div>
      <div className={styles.switchAction}>
        <h3 className={styles.switchQuestion}>
          {path == 'signin' ? 'У вас еще нет аккаунта?' : 'Уже есть аккаунт?'}
        </h3>
        <Link
          to={`/auth/${path == 'signin' ? 'signup' : 'signin'}`}
          className={styles.switcher}>{path == 'signin' ? 'Создать аккаунт' : 'Войти'}</Link>
      </div>
    </div>
  );
}

AuthPage.propTypes = {};

export default AuthPage;
