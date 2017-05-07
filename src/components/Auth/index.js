import React from 'react';
import { Link } from 'react-router';
import styles from './Auth.css';

const Auth = ({ isLogged = false, flag }) => {
	return isLogged
		? (
			<div className={styles.profile}>
				<a href='#' className={flag ? styles.profileLink : styles.profileLinkAlt}>Профиль</a>
			</div>)
		: (
			<div className={styles.signIn}>
				<Link to='/login' className={flag ? styles.signInLinkAlt : styles.signInLink}>Войти</Link>
			</div>
		)
}

export default Auth;
