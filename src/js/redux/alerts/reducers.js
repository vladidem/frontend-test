import { ADD_ALERT, DELETE_ALERT } from './constants';

const initialState = [];

const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALERT: {
      const { alert } = action.payload;

      return [...state, alert];
    }
    case DELETE_ALERT: {
      const { id } = action.payload;

      return state.filter((alert) => alert.id !== id);
    }
    default:
      return state;
  }
};

export default alertsReducer;
