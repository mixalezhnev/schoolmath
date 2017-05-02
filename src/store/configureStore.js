import rootReducer from './reducers';
import {createStore, applyMiddleware,} from 'redux';
import {browserHistory} from 'react-router';

import logger from 'redux-logger';
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux';

export default initialState => {
  const middleware = routerMiddleware(browserHistory);

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger, middleware));
}
