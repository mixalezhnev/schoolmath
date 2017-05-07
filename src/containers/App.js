import React, { Component } from 'react';

import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listenToArticles } from '../store/actions/articles';
import getProgress from '../store/actions/progress';

const mapDispatchToProps = (dispatch) => ({
	getData: bindActionCreators(listenToArticles, dispatch),
	getProgress: bindActionCreators(getProgress, dispatch)
})

class App extends Component {
	componentDidMount() {
		this.props.getProgress({completed: 23, total: 125});
    this.props.getData();
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
