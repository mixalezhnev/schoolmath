import React from 'react';
import ContentList from '../components/ContentList';

import { connect } from 'react-redux';

const mapStateToProps = ({ articles }) => ({
	data: articles.data
})

export default connect(mapStateToProps)(ContentList);
