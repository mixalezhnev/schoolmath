import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import {
  Router,
  Route,
  browserHistory,
  Redirect,
  IndexRoute,
} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './containers/App';
import Home from './components/Home';
import Overview from './containers/Overview';
import Practice from './containers/Practice';
import Progress from './containers/Progress';
import Subject from './components/Subject';
import SubjectPractice from './containers/SubjectPractice';
import SubjectOverview from './containers/SubjectOverview';
import Lesson from './containers/Lesson';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import {auth} from './firebaseApp';
import {listenToProgress} from './store/actions/ProgressActions';

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(`I signed in as ${user.uid}`);
    store.dispatch(listenToProgress(user));
  } else {
    auth.signInAnonymously()
    .then(info => console.log(`I was born ${info}`))
    .catch(err => console.error(err))
  }
})

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='overview'/>
      <Redirect from='/subject/:subject' to='/subject/:subject/overview'/>
      <Route path='/' component={App}>
        <Route path='/overview' component={Home}>
          <IndexRoute component={Overview}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/progress' component={Progress}/>
        </Route>
        <Route path='/subject/:subject' component={Subject}>
          <Route path='/subject/:subject/overview' component={SubjectOverview}>
            <Route path='/subject/:subject/overview/:lesson' component={Lesson}/>
          </Route>
          <Route path='/subject/:subject/practice' component={SubjectPractice}/>
        </Route>
        </Route>
      </Router>
  </Provider>,
	document.getElementById('root')
);
