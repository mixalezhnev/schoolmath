import React from 'react';

import Article from '../../components/Article';
import OverviewProgressContainer from '../../containers/OverviewProgressContainer';

import { connect } from 'react-redux';

import styles from './Overview.css';

const Overview = ({ data }) => {
	const articles = data.map((article, i) =>
		<Article data={article} key={i} />
	);

	return (
		<div>
			<OverviewProgressContainer />
			<div className={styles.container}>{articles}</div>
		</div>
	);
}

export default Overview;
