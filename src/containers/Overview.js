import React from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article';
import OverviewProgressContainer from './OverviewProgressContainer';

const mapStateToProps = ({ articles }) => ({
	data: articles.data
})

const Overview = ({ data }) => {
	const articles = data.map((article, i) =>
		<Article data={article} key={i} />
	);

	return (
		<div>
			<OverviewProgressContainer />
			<div className='main content'>{articles}</div>
		</div>
	);
}

export default connect(mapStateToProps)(Overview);
