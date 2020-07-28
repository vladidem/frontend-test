import React, { createContext, useState, useContext } from 'react';

import shortid from 'shortid';

import get from 'lodash-es/get';

import { AlertContext } from '../alerts/AlertContext';

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
  const { alertSuccess } = useContext(AlertContext);

  const deleteImage = (id) =>
    setImages(images.filter((image) => image.id !== id));

  const addImage = (image) => {
    setImages([...images, image]);
    alertSuccess('1 изображение добавлено');
  };

  const addImages = (newImages) => {
    setImages([...images, ...newImages]);
    alertSuccess(`${newImages.length} изображений добавлено`);
  };

  const addUnsplashImages = (amount) => {
    addImages(generateUnsplashImages(amount));
    alertSuccess(`${amount} изображений добавлено`);
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
  const updateMinHeight = (height) => {
    setImageMinHeight(height);
    alertSuccess(`Минимальная высота изображений установлена на ${height}`)
  }

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
        addFromUrl
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryProvider, GalleryContext };
