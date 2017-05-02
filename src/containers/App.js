import React, { Component } from 'react';

import Header from '../components/Header';
import Section from '../components/Section';
import Overview from './Overview';
import Practice from './Practice';
import Progress from './Progress';
import Footer from '../components/Footer';
import NotFound from '../components/404';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listenToArticles } from '../store/actions/articles';
import getProgress from '../store/actions/progress';

import { Router, Route, browserHistory } from 'react-router';

const mapDispatchToProps = (dispatch) => ({
	getData: bindActionCreators(listenToArticles, dispatch),
	getProgress: bindActionCreators(getProgress, dispatch)
})

class App extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	pages: [
		// 		{
		// 			title: 'Обзор курса',
		// 			path: '/'
		// 		}, {
		// 			title: 'Практикум',
		// 			path: '/practice'
		// 		}, {
		// 			title: 'Прогресс',
		// 			path: '/progress'
		// 		},
		// 	]
		// };
	}

	componentDidMount() {
		this.props.getData();
		this.props.getProgress(10);
	}

	render() {
		return (
			<div className='App'>
				<Header />
        {this.props.children}
				<Footer />
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
