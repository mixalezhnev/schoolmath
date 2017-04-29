import React from 'react';

import { getCircleProgress } from '../ulits';

const ProgressIcon = ({ total }) => {
	const radius = 47;
	const { dasharray, circumference } = getCircleProgress(radius, total);

	return (
		<div className='progress-block'>
			<div className='progress-graph'>
				<svg className='svg-icon'>
					<circle className='svg-backdrop' cx='50%' cy='50%' r={`${radius}%`}></circle>
					<circle className='svg-progress' cx='50%' cy='50%' r={`${radius}%`}
						strokeDasharray={circumference}
						strokeDashoffset={dasharray}
						strokeLinecap='round'
					></circle>
				</svg>
				<div className='progress-block__percent'>
					<span>{total}</span>
					<span className='percent-sign'>%</span>
				</div>
			</div>

		</div>
	);
}

export default ProgressIcon;
