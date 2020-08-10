import { combineReducers, createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import alertsReducer from './alerts/reducers';
import imagesReducer from './images/reducers';
import lightboxReducer from './lightbox/reducers';

const rootReducer = combineReducers({
  alerts: alertsReducer,
  images: imagesReducer,
  lightbox: lightboxReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
