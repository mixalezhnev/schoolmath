import React from 'react';

import Article from '../../containers/Article';
import OverviewProgress from '../../containers/OverviewProgress';

import styles from './Overview.css';

const Overview = ({ data }) => {
	const articles = data.map((article, i) =>
		<Article data={article} key={i} />
	);

	return (
		<div>
			<OverviewProgress />
			<div className={styles.container}>{articles}</div>
		</div>
	);
}

export default Overview;
