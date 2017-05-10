import React from 'react';

import ProgressIcon from '../ProgressIcon';
import StartUp from '../StartUp';
import Button from '../Button';

import styles from './OverviewProgress.css';

import { Link } from 'react-router';

const OverviewProgress = ({ percentage, next }) => {
	const isStart = percentage == 0;

	return (
		<div className={styles.progressContainer}>
			<div className={styles.progress}>
				{isStart
					? <StartUp />
					: <ProgressIcon total={percentage} />
				}
				<div className={styles.mission}>
					<div>
            <span className={styles.missionAction}>{isStart ? 'Начать' : 'Продолжить'} миссию</span>
						<div className={styles.missionNext}>
							<span>Следующее задание: {next}</span>
						</div>
					</div>
					<Link to='/practice'>
						<Button inner='Старт' />
					</Link>
				</div>
			</div>
		</div>
	);
}
export default OverviewProgress;
