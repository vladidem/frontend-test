import React, { createContext, useState } from 'react';

import { useDispatch } from 'react-redux';

import { alertSuccess } from '../../redux/alerts/actions';

const MIN_HEIGHT = 200;

const GalleryContext = createContext({});

const GalleryProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [imageMinHeight, setImageMinHeight] = useState(MIN_HEIGHT);

  const updateMinHeight = (height) => {
    setImageMinHeight(height);
    dispatch(
      alertSuccess(`Минимальная высота изображений установлена на ${height}`),
    );
  };

  return (
    <GalleryContext.Provider
      value={{
        imageMinHeight,
        updateMinHeight,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryProvider, GalleryContext };
