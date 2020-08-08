import { ADD_IMAGE, ADD_IMAGES, DELETE_IMAGE, UPDATE_IMAGE } from './constants';

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
    case UPDATE_IMAGE: {
      const { id, image: newImage } = action.payload;
      const oldImage = state.find((image) => image.id === id);
      const newState = state.filter((image) => image.id !== id);

      newState.push({ ...oldImage, ...newImage });
      return newState;
    }
    default:
      return state;
  }
};

export default imagesReducer;
