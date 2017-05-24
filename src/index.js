import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import {Router, Route, browserHistory, Redirect, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './containers/App';
import Home from './components/Home';
import OverviewPage from './containers/OverviewPage';
import PracticePage from './components/PracticePage';
import ProgressPage from './containers/ProgressPage';
import Subject from './components/Subject';
import SubjectPractice from './containers/SubjectPractice';
import SubjectOverview from './containers/SubjectOverview';
import Lesson from './containers/Lesson';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import {auth} from './firebaseApp';
import {listenToPractice} from './ulits';
import {listenToProgress} from './store/actions/progress';

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(`I signed in as ${user.uid}`);
    store.dispatch(listenToProgress(user));
  } else {
    listenToPractice();
  }
})

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='overview'/>
      <Redirect from='/subject/:subject' to='/subject/:subject/overview'/>
      <Route path='/' component={App}>
        <Route path='/overview' component={Home}>
          <IndexRoute component={OverviewPage}/>
          <Route path='/practice' component={PracticePage}/>
          <Route path='/progress' component={ProgressPage}/>
        </Route>
        <Route path='/subject/:subject' component={Subject}>
          <Route path='/subject/:subject/overview' component={SubjectOverview}>
            <Route path='/subject/:subject/overview/:lesson' component={Lesson}/>
          </Route>
          <Route path='/subject/:subject/practice' component={SubjectPractice}/>
        </Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
