import { currentSelected } from './selectors';
import { selectImage } from './actions';
import { nextImageSelector, previousImageSelector } from '../images/selectors';

const selectNext = () => (dispatch, getState) => {
  const state = getState();
  const current = currentSelected(state);
  const next = nextImageSelector(current)(state);

  dispatch(selectImage(next));
};

const selectPrevious = () => (dispatch, getState) => {
  const state = getState();
  const current = currentSelected(state);
  const previous = previousImageSelector(current)(state);

  dispatch(selectImage(previous));
};

export { selectNext, selectPrevious };
