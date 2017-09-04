import { combineReducers } from 'redux';

import counter from '../reducers/counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
