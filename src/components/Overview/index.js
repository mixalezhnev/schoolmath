import React from 'react';

import Article from '../../components/Article';
import OverviewProgress from '../../containers/OverviewProgress';

import { connect } from 'react-redux';

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
