import { combineReducers } from 'redux';

import JobsReducer from './jobs';

const rootReducers = combineReducers({
  jobs: JobsReducer,
});

export default rootReducers;
