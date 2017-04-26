import React, {Component} from 'react';
import OverviewProgress from '../components/OverviewProgress';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getProgress from '../store/actions/progress';

const mapStateToProps = (state) => {
  return {
    progress: state.progress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProgress: bindActionCreators(getProgress, dispatch)
  }
}


class OverviewProgressContainer extends Component {
  componentDidMount() {
    this.props.getProgress();
  }

  render() {
    return (
      <OverviewProgress {...this.props.progress}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewProgressContainer);
