import React, {Component} from 'react';
import Modal from './Modal';
import Header from './Header';

import Section from './Section';
import Overview from './Overview';
import Practice from './Practice';
import Progress from './Progress';
import NotFound from './404';

import {Router, Route, browserHistory}
  from 'react-router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
      currentLesson: '',
      pages: [
        {
          title: 'Обзор курса',
          path: '/',
        }, {
          title: 'Практикум',
          path: '/practice',
        }, {
          title: 'Прогресс',
          path: '/progress',
        }
      ]
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpened: !this.state.isModalOpened
    });
  }

  componentDidMount() {
    window.ee.addListener('openLesson', (title) => {
      this.setState({
        currentLesson: title
      });
      this.toggleModal();
    });
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Router history={browserHistory}>
          <Route component={Section} pages={this.state.pages}>
            <Route path='/' component={Overview}/>
            <Route path='practice' component={Practice}/>
            <Route path='progress' component={Progress}/>
            <Route path='*' component={NotFound}/>
          </Route>
        </Router>
        <Modal isOpened={this.state.isModalOpened} close={this.toggleModal} lesson={this.state.currentLesson}/>
      </div>
    );
  }
}
