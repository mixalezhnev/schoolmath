import React, { Component } from 'react';

import SearchModal from './SearchModal';
// import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {listenToArticles} from '../store/actions/articles';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getArticles: listenToArticles
  }, dispatch)
})

class App extends Component {
	componentDidMount() {
    const {getArticles} = this.props;

    getArticles();
	}

	render() {
		return (
			<div className='App'>
        <SearchModal />
        {this.props.children}
				{/* <Footer /> */}
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
