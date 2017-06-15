import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleSearch } from '../store/actions/search';

import SearchBox from '../components/SearchBox';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleSearch
  }, dispatch)
})

class SearchBoxContainer extends Component {
  static propTypes = {
    toggleSearch: PropTypes.func.isRequired
  }

  openSearchModal = (e) => {
    e.preventDefault();
    this.props.toggleSearch();
  }

  render() {
    return (
      <SearchBox handleClick={this.openSearchModal}/>
    );
  }

}

export default connect(null, mapDispatchToProps)(SearchBoxContainer);
