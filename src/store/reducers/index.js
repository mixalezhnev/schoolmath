import {combineReducers} from 'redux';

import articles from './articles';
import progress from './progress';

const rootReducer = combineReducers({articles, progress});

export default rootReducer;
