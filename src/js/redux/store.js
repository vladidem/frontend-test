import { combineReducers, createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import alertsReducer from './alerts/reducers';

const rootReducer = combineReducers({
  alerts: alertsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
