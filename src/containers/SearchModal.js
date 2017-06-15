import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { toggleSearch } from '../store/actions/search';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchModal from '../components/SearchModal';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    closeModal: toggleSearch
  }, dispatch)
})

const mapStateToProps = ({ search }) => ({
  state: search.modalState
})

class SearchModalContainer extends Component {
  static propTypes = {
    state: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
  };

  state = {
    value: ''
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    window.document.body.style.overflow = this.props.state ?  'hidden' : '';
    return (
      <SearchModal {...this.props} onChange={this.onChange}/>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchModalContainer);
