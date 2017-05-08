import React, { Component } from 'react';

import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listenToArticles } from '../store/actions/Articles';
const mapDispatchToProps = (dispatch) => ({
	getArticles: bindActionCreators(listenToArticles, dispatch)
})

class App extends Component {
	componentDidMount() {
    this.props.getArticles();
	}

	render() {
		return (
			<div className='App'>
        {this.props.children}
				<Footer />
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
