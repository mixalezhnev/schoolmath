import React from 'react';
import NavLink from '../NavLink';

import styles from './Navigation.css';

const Navigation = () => {
	return (
		<div className={styles.navigation}>
      <NavLink title='Обзор' path='home'/>
      <NavLink title='Практикум' path='practice'/>
      <NavLink title='Прогресс' path='progress'/>
		</div>
	);
}

export default Navigation;
