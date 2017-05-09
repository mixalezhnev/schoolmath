import React, { Component } from 'react';
import OverviewProgress from '../components/OverviewProgress';

import { connect } from 'react-redux';

const mapStateToProps = ({progress}) => ({
  progress: progress.data
})

class OverviewProgressContainer extends Component {
	render() {
		return (
      <OverviewProgress {...this.props.progress} />
		);
	}
}

export default connect(mapStateToProps)(OverviewProgressContainer);
