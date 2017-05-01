import React from 'react';
import { Link } from 'react-router';
import styles from './Auth.css';

const Auth = ({ isLogged = false }) => {
	return isLogged
		? (
			<div className={styles.profile}>
				<a href='#' className={styles.profileLink}>Профиль</a>
			</div>)
		: (
			<div className={styles.signIn}>
				<Link to='/login' className={styles.signInLink}>Войти</Link>
			</div>
		)
}

export default Auth;