import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import articles from './articles';
import progress from './progress';
import lesson from './lesson';

const rootReducer = combineReducers({
  articles,
  progress,
  lesson,
  routing: routerReducer
  }
);

export default rootReducer;
