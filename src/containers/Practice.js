import React from 'react';
import Practice from '../components/Practice';

import { connect } from 'react-redux';

const mapStateToProps = ({ articles }) => ({
	data: articles.data
})


export default connect(mapStateToProps)(Practice);
