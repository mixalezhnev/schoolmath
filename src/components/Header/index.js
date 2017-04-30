import React from 'react';
import Auth from '../../containers/Auth';
import SearchBox from '../SearchBox';

import styles from './Header.css';
import logo from './logo.svg';

const Header = () => (
	<div className={styles.header}>
		<div className={styles.content}>
			<div className={styles.header__group}>
				<div className={styles.logo}>
					<img src={logo} className={styles.logo__image} alt='Math starts here' />
				</div>
				<div className={styles.header__right}>
					<SearchBox />
					<Auth />
				</div>
			</div>
		</div>
	</div>
);

export default Header;
