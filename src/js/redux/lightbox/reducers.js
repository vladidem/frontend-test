import { CLOSE_LIGHTBOX, SELECT_IMAGE } from './constants';

const initialState = { selected: null };

const lightboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_IMAGE: {
      const { image } = action.payload;

      return { selected: image };
    }
    case CLOSE_LIGHTBOX: {
      return initialState;
    }
    default:
      return state;
  }
};

export default lightboxReducer;
