import shortid from 'shortid';

import get from 'lodash-es/get';

import { ADD_IMAGE, ADD_IMAGES, DELETE_IMAGE, UPDATE_IMAGE } from './constants';
import { alertSuccess } from '../alerts/actions';

import { generateUnsplashImages } from './unsplashGenerator';

const deleteImage = (id) => ({ type: DELETE_IMAGE, payload: { id } });

const addImage = (image) => (dispatch) => {
  dispatch({ type: ADD_IMAGE, payload: { image } });
  dispatch(alertSuccess(`Изображений добавлено: 1`));
};
const addImages = (images) => (dispatch) => {
  dispatch({ type: ADD_IMAGES, payload: { images } });
  dispatch(alertSuccess(`Изображений добавлено: ${images.length}`));
};

const addFromUnsplash = (amount) => (dispatch) => {
  dispatch(addImages(generateUnsplashImages(amount)));
};
const addFromJson = (json) => (dispatch) => {
  const images = get(json, 'galleryImages', []);
  dispatch(
    addImages(images.map((image) => ({ id: shortid.generate(), ...image }))),
  );
};
const addFromUrl = (url) => (dispatch) => {
  const image = {
    id: shortid.generate(),
    url,
  };
  dispatch(addImage(image));
};

const updateImage = (id, image) => ({
  type: UPDATE_IMAGE,
  payload: {
    id,
    image,
  },
});

export {
  deleteImage,
  addFromJson,
  addFromUrl,
  addFromUnsplash,
  addImages,
  updateImage,
};
