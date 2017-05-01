import React from 'react';
import Overview from '../components/Overview';

import { connect } from 'react-redux';

const mapStateToProps = ({ articles }) => ({
	data: articles.data
})

export default connect(mapStateToProps)(Overview);
