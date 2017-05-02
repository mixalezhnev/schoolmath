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
import Subject from './containers/Subject';
import SubjectPractice from './containers/SubjectPractice';
import SubjectOverview from './containers/SubjectOverview';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='home'></Redirect>
      <Route path='/' component={App}>
        <Route path='home' component={Home}>
          <IndexRoute component={Overview}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/progress' component={Progress}/>
        </Route>
        <Route path='/subject/:subject' component={Subject}>
          <Route path='/overview' component={SubjectOverview}></Route>
          <Route path='/practice' component={SubjectPractice}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>,
	document.getElementById('root')
);
