import shortid from 'shortid';

import get from 'lodash-es/get';

import { addImages } from './actions';

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

export { addFromFiles };
