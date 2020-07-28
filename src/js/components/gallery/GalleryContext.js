import React, { createContext, useState } from 'react';

import { useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import { alertSuccess } from '../../redux/alerts/actions';

const heights = {
  xsOrSm: 200,
  md: 225,
  lg: 250,
};

const GalleryContext = createContext({});

const GalleryProvider = ({ children }) => {
  const dispatch = useDispatch();

  const isXsOrSm = useMediaQuery({ maxWidth: 767.99 });
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 991.99 });
  const isLg = useMediaQuery({ minWidth: 992 });
  const recommendedHeight =
    (isXsOrSm && heights.xsOrSm) ||
    (isMd && heights.md) ||
    (isLg && heights.lg);

  const [imageMinHeight, setImageMinHeight] = useState(recommendedHeight);
  const [isHeightManual, setHeightManual] = useState(false);

  const updateMinHeight = (height) => {
    setHeightManual(true);
    setImageMinHeight(height);
    dispatch(
      alertSuccess(`Минимальная высота изображений установлена на ${height}`),
    );
  };

  return (
    <GalleryContext.Provider
      value={{
        imageMinHeight: isHeightManual ? imageMinHeight : recommendedHeight,
        updateMinHeight,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryProvider, GalleryContext };
