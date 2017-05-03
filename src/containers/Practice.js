import React from 'react';
import Practice from '../components/Practice';

import { connect } from 'react-redux';

const mapStateToProps = ({ articles, progress }) => ({
	data: articles.data,
  progress
})


export default connect(mapStateToProps)(Practice);
