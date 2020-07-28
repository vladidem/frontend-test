import { combineReducers, createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import alertsReducer from './alerts/reducers';
import imagesReducer from './images/reducers';

const rootReducer = combineReducers({
  alerts: alertsReducer,
  images: imagesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
