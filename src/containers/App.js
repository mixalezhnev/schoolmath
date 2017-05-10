import React, { Component } from 'react';

// import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {listenToArticles} from '../store/actions/articles';
// import {listenToPractice} from '../store/actions/practice';

const mapDispatchToProps = (dispatch) => ({
  getArticles: bindActionCreators(listenToArticles, dispatch)
})

class App extends Component {
	componentDidMount() {
    const {getArticles} = this.props;

    getArticles();
	}

	render() {
		return (
			<div className='App'>
        {this.props.children}
				{/* <Footer /> */}
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
