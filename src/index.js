import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import {Router, Route, browserHistory, Redirect} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './containers/App';
import Overview from './containers/Overview';
import Practice from './containers/Practice';
import Progress from './containers/Progress';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
    <Router history={history}>
      <Redirect from ='/' to='home'/>

      <Route path='/' component={App}>
        <Route path='practice' component={Practice}/>
        <Route path='progress' component={Progress}/>
      </Route>
    </Router>
	</Provider>,
	document.getElementById('root')
);
