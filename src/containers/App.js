import React, { Component } from 'react';
import Header from '../components/Header';

import Section from '../components/Section';
import Overview from './Overview';
import Practice from '../components/Practice';
import Progress from '../components/Progress';
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
		this.state = {
			pages: [
				{
					title: 'Обзор курса',
					path: '/'
				}, {
					title: 'Практикум',
					path: '/practice'
				}, {
					title: 'Прогресс',
					path: '/progress'
				},
			],
		};
	}

	componentDidMount() {
		this.props.getData();
		this.props.getProgress();
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Router history={browserHistory}>
					<Route component={Section} pages={this.state.pages}>
						<Route path='/' component={Overview} />
						<Route path='practice' component={Practice} />
						<Route path='progress' component={Progress} />
						<Route path='*' component={NotFound} />
					</Route>
				</Router>
				{/*<Modal isOpened={this.state.isModalOpened} close={this.toggleModal} lesson={this.state.currentLesson} articles={this.props.data}/>*/}
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
