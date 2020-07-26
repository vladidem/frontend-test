import React, { createContext, useState, useContext } from 'react';

import shortid from 'shortid';

import { AlertContext } from '../alerts/AlertContext';

const MIN_HEIGHT = 200;

const unsplashImages = [...Array(25).keys()].map((key) => ({
  id: shortid.generate(),
  url: `https://source.unsplash.com/random?sig=${key}`,
}));

const GalleryContext = createContext({});

const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState(unsplashImages);
  const { alertSuccess } = useContext(AlertContext);

  const deleteImage = (id) =>
    setImages((image) => images.filter(image.id !== id));

  const addImage = (image) => {
    setImages([...images, image]);
    alertSuccess('1 изображение добавлено');
  };

  const addImages = (newImages) => {
    setImages([...images, ...newImages]);
    alertSuccess(`${newImages.length} изображений добавлено`);
  };

  return (
    <GalleryContext.Provider
      value={{
        images,
        deleteImage,
        imageMinHeight: MIN_HEIGHT,
        addImage,
        addImages,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryProvider, GalleryContext };
