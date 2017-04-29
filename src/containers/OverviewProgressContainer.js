import React, { Component } from 'react';
import OverviewProgress from '../components/OverviewProgress';

import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	return {
		progress: state.progress
	}
}

class OverviewProgressContainer extends Component {
	render() {
		return (
			<div>
				<OverviewProgress {...this.props.progress} />
			</div>
		);
	}
}

export default connect(mapStateToProps)(OverviewProgressContainer);
