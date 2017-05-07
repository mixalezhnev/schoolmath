import React from 'react';
import { Link } from 'react-router';

import styles from './NavLink.css';

const NavLink = ({ path, title, flag }) => {
	return (
		<Link
			to={path}
			className={styles.link}
      onlyActiveOnIndex={!flag}
			activeClassName={flag == 'subject' ? `${styles.activeLink} ${styles.activeLinkAlt}` : styles.activeLink}>
      {title}
    </Link>
	);
}

export default NavLink;
