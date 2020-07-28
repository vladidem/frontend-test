import shortid from 'shortid';
import { ADD_ALERT, DELETE_ALERT, ALERT_TYPE_SUCCESS } from './constants';

const deleteAlert = (id) => ({ type: DELETE_ALERT, payload: { id } });

const alertSuccess = (message, timeToLive = 5000) => (dispatch) => {
  const alert = {
    message,
    type: ALERT_TYPE_SUCCESS,
    id: shortid.generate(),
    expires: Date.now() + timeToLive,
  };

  dispatch({
    type: ADD_ALERT,
    payload: { alert },
  });
  setTimeout(() => dispatch(deleteAlert(alert.id)), timeToLive);
};

export { alertSuccess, deleteAlert };
