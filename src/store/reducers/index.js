import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import articles from './articles';
import progress from './progress';

const rootReducer = combineReducers({
  articles,
  progress,
  routing: routerReducer
  }
);

export default rootReducer;
