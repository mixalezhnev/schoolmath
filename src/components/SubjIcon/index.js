import React from 'react';
import styles from './SubjIcon.css';

const SubjIcon = ({ url }) => (
	<div style={{
		backgroundImage: 'url(' + url + ')'
	}}
		className={styles.icon}></div>
);

export default SubjIcon;