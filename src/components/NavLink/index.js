import React from 'react';
import { Link } from 'react-router';

import styles from './NavLink.css';

const NavItem = ({ path, title }) => {
	return (
		<Link
			to={path}
			className={styles.link}
			activeClassName={styles.activeLink}>{title}</Link>
	);
}

export default NavItem;
