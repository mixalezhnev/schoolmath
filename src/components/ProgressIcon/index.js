import React from 'react';
import './ProgressIcon.css';

import { getCircleProgress } from '../../ulits';
import styles from './ProgressIcon.css';

const ProgressIcon = ({ total, radius = 47 }) => {
	const { dasharray, circumference } = getCircleProgress(radius, total);
	const isForSmallIcon = radius < 47;
	const isForBigIcon = radius > 47;

	return (
		<div className={styles.container}>
			<div className={styles.graph}>{
				isForBigIcon ?
					<svg className={styles.bigIcon}>
						<circle className={isForSmallIcon ? styles.smallBackdrop : styles.backdrop} cx='50%' cy='50%' r={radius}></circle>
						<circle className={isForSmallIcon ? styles.smallProgress : styles.progress} cx='50%' cy='50%' r={radius}
							strokeDasharray={circumference}
							strokeDashoffset={dasharray}>
						</circle>
						<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className={styles.text}>{total}<tspan className={styles.smallText}>%</tspan></text>
					</svg> :
				<svg className={isForSmallIcon ? styles.smallIcon  : styles.icon}>
					<circle className={isForSmallIcon ? styles.smallBackdrop : styles.backdrop} cx='50%' cy='50%' r={radius}></circle>
					<circle className={isForSmallIcon ? styles.smallProgress : styles.progress} cx='50%' cy='50%' r={radius}
						strokeDasharray={circumference}
						strokeDashoffset={dasharray}>
					</circle>
				</svg>
			}
				{!isForSmallIcon && !isForBigIcon &&
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
