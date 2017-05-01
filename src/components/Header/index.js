import React from 'react';
import Auth from '.././Auth';
import SearchBox from '../SearchBox';

import styles from './Header.css';
import logo from './logo.svg';

const Header = () => (
	<div className={styles.header}>
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src={logo} className={styles.logoIcon} alt='Math starts here' />
			</div>
			<div className={styles.rightBlock}>
				<SearchBox />
				<Auth />
			</div>
		</div>
	</div>
);

export default Header;
