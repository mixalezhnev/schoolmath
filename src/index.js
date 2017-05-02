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
import Section from './components/Section';
import Overview from './containers/Overview';
import Practice from './containers/Practice';
import Progress from './containers/Progress';
import Subject from './containers/Subject';
import SubjectPractice from './containers/Subject';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='home'></Redirect>
      <Route path='/' component={App}>
        <Route path='home' component={Section}>
          <IndexRoute component={Overview}/>
          <Route path='practice' component={Practice}/>
          <Route path='progress' component={Progress}/>
        </Route>
        <Route path='(:subject)' component={Subject}>
          <Route path='practice' component={SubjectPractice}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>,
	document.getElementById('root')
);
