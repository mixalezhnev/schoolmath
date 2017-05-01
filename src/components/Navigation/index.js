import React from 'react';
import NavLink from '../NavLink';

import styles from './Navigation.css';

const Navigation = ({ pages }) => {
	let navItems = pages.map((item) => {
		return <NavLink
			title={item.title}
			path={item.path}
			key={item.title} />
	});

	return (
		<div className={styles.navigation}>
			{navItems}
		</div>
	);
}

export default Navigation;
