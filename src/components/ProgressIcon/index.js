import React from 'react';
import './ProgressIcon.css';

import { getCircleProgress } from '../../ulits';
import styles from './ProgressIcon.css';

const ProgressIcon = ({ total, children, radius = 47 }) => {
	const { dasharray, circumference } = getCircleProgress(radius, total);
	const isForSmallIcon = radius < 47;

	return (
		<div className={styles.container}>
			<div className={styles.graph}>
				<svg className={isForSmallIcon ? styles.smallIcon : styles.icon}>
					<circle className={styles.backdrop} cx='50%' cy='50%' r={radius}></circle>
					<circle className={styles.progress} cx='50%' cy='50%' r={radius}
						strokeDasharray={circumference}
						strokeDashoffset={dasharray}
						strokeLinecap='round'>
					</circle>
				</svg>
				{!isForSmallIcon &&
					<div className={styles.percents}>
						<span>{total}</span>
						<span className={styles.percentsSign}>%</span>
					</div>
				}
			</div>

		</div>
	);
}

export default ProgressIcon;
