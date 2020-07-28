import shortid from 'shortid';

import get from 'lodash-es/get';

import { ADD_IMAGE, ADD_IMAGES, DELETE_IMAGE } from './constants';
import { alertSuccess } from '../alerts/actions';

const generateUnsplashImages = (amount) =>
  [...Array(amount).keys()].map((key) => ({
    id: shortid.generate(),
    url: `https://source.unsplash.com/random?sig=${Math.floor(
      Math.random() * 100000,
    )}`,
  }));

const deleteImage = (id) => ({ type: DELETE_IMAGE, payload: { id } });

const addImage = (image) => (dispatch) => {
  dispatch({ type: ADD_IMAGE, payload: { image } });
  dispatch(alertSuccess(`1 изображение добавлено`));
};
const addImages = (images) => (dispatch) => {
  dispatch({ type: ADD_IMAGES, payload: { images } });
  dispatch(alertSuccess(`${images.length} изображений добавлено`));
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

const jsonFilesToImages = (files) => {
  return Promise.all(
    files.map((file) =>
      file.text().then((text) => {
        try {
          return JSON.parse(text);
        } catch (e) {
          return {};
        }
      }),
    ),
  ).then((jsons) => {
    return jsons
      .map((json) => get(json, 'galleryImages', []))
      .reduce((prev, current) => [...prev, ...current], [])
      .map((image) => ({ id: shortid.generate(), ...image }));
  });
};

const imageFilesToImages = (files) => {
  return new Promise((resolve, reject) =>
    resolve(
      files.map((file) => ({
        url: URL.createObjectURL(file),
        id: shortid.generate(),
      })),
    ),
  );
};

const addFromFiles = (files) => (dispatch) => {
  const isImage = (file) =>
    file && get(file, 'type', '/').split('/')[0] === 'image';
  const isJson = (file) => file.type.toLowerCase() === 'application/json';

  Promise.all([
    imageFilesToImages(files.filter(isImage)),
    jsonFilesToImages(files.filter(isJson)),
  ]).then(([fileImages, jsonImages]) =>
    dispatch(addImages([...fileImages, ...jsonImages])),
  );
};

export { deleteImage, addFromFiles, addFromJson, addFromUrl, addFromUnsplash };
