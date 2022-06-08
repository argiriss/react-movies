import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  counterReducer,
  moviesReducer,
});

export default rootReducer;
