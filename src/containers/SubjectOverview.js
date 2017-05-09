import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import SubjectOverview from '../components/SubjectOverview';

class SubjectOverviewContainer extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    return <SubjectOverview {...this.props}/>
  }
}

const mapStateToProps = ({articles}) => ({
  data: articles.data
})

export default connect(mapStateToProps)(SubjectOverviewContainer);
