import { ADD_IMAGE, ADD_IMAGES, DELETE_IMAGE } from './constants';

const initialState = [];

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGES: {
      const { images } = action.payload;

      return [...state, ...images];
    }
    case ADD_IMAGE: {
      const { image } = action.payload;

      return [...state, image];
    }
    case DELETE_IMAGE: {
      const { id } = action.payload;

      return state.filter((image) => image.id !== id);
    }
    default:
      return state;
  }
};

export default imagesReducer;
