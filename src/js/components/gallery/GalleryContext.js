import React, { createContext, useState, useContext } from 'react';

import shortid from 'shortid';

import get from 'lodash-es/get';

import { useDispatch } from 'react-redux';
import { alertSuccess } from '../../redux/alerts/actions';

const MIN_HEIGHT = 200;

const generateUnsplashImages = (amount) =>
  [...Array(amount).keys()].map((key) => ({
    id: shortid.generate(),
    url: `https://source.unsplash.com/random?sig=${Math.floor(
      Math.random() * 100000,
    )}`,
  }));

const GalleryContext = createContext({});

const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [imageMinHeight, setImageMinHeight] = useState(MIN_HEIGHT);
  const dispatch = useDispatch();

  const deleteImage = (id) =>
    setImages(images.filter((image) => image.id !== id));

  const addImage = (image) => {
    setImages([...images, image]);
    alertSuccess('1 изображение добавлено');
  };

  const addImages = (newImages) => {
    setImages([...images, ...newImages]);
    dispatch(alertSuccess(`${newImages.length} изображений добавлено`));
  };

  const addUnsplashImages = (amount) => {
    addImages(generateUnsplashImages(amount));
  };

  const addFromJson = (json) => {
    const newImages = get(json, 'galleryImages', []);

    addImages(newImages.map((image) => ({ id: shortid.generate(), ...image })));
  };

  const addFromUrl = (url) => {
    const image = {
      id: shortid.generate(),
      url,
    };
    addImage(image);
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

  const addFromFiles = (files) => {
    const isImage = (file) =>
      file && get(file, 'type', '/').split('/')[0] === 'image';
    const isJson = (file) => file.type.toLowerCase() === 'application/json';

    Promise.all([
      imageFilesToImages(files.filter(isImage)),
      jsonFilesToImages(files.filter(isJson)),
    ]).then(([fileImages, jsonImages]) =>
      addImages([...fileImages, ...jsonImages]),
    );
  };

  const updateMinHeight = (height) => {
    setImageMinHeight(height);
    dispatch(
      alertSuccess(`Минимальная высота изображений установлена на ${height}`),
    );
  };

  return (
    <GalleryContext.Provider
      value={{
        images,
        deleteImage,
        imageMinHeight,
        updateMinHeight,
        addImage,
        addImages,
        addUnsplashImages,
        addFromJson,
        addFromUrl,
        addFromFiles,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryProvider, GalleryContext };
