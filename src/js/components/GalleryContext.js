import React, { createContext, useState } from 'react';

import shortid from 'shortid';

import get from 'lodash-es/get';

const MIN_HEIGHT = 200;

const unsplashImages = [...Array(25).keys()].map((key) => ({
  id: shortid.generate(),
  url: `https://source.unsplash.com/random?sig=${key}`,
}));

const GalleryContext = createContext({});

const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState(unsplashImages);

  const deleteImage = (id) => setImages(images.filter(image.id !== id));

  const addImage = (image) => setImages([...images, image]);
  const addImages = (newImages) => setImages([...images, ...newImages]);

  return (
    <GalleryContext.Provider
      value={{ images, deleteImage, imageMinHeight: MIN_HEIGHT, addImage, addImages }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryProvider, GalleryContext };
