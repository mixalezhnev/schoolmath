import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import articles from './articles';
import progress from './progress';
import practice from './practice';
import lesson from './lesson';

const rootReducer = combineReducers({
  articles,
  progress,
  practice,
  lesson,
  routing: routerReducer,
});

export default rootReducer;
