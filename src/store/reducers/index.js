import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import search from './search';
import articles from './articles';
import progress from './progress';
import practice from './practice';
import lesson from './lesson';
import user from './user';

const rootReducer = combineReducers({
  search,
  articles,
  progress,
  practice,
  lesson,
  user,
  routing: routerReducer,
});

export default rootReducer;
