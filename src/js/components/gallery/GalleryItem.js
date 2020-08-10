import React, { useContext, useState } from 'react';

import { GalleryContext } from './GalleryContext';

import { useDispatch } from 'react-redux';

import { selectImage } from '../../redux/lightbox/actions';

import Image from './Image';
import GalleryItemOverlay from './GalleryItemOverlay';

import keypressToClick from './../../utils/keypressToClick';

const GalleryItem = ({ image }) => {
  const dispatch = useDispatch();
  const openLightbox = () => dispatch(selectImage(image));

  const { imageMinHeight } = useContext(GalleryContext);
  const { width, height } = image;
  const ratio = width / height || 1;

  const galleryItemStyle = {
    flexGrow: imageMinHeight * ratio,
    width: imageMinHeight * ratio,
  };

  const imageSpacerStyle = {
    paddingBottom: `${(1 / ratio) * 100}%`,
  };

  return (
    <div
      className="gallery-item"
      style={galleryItemStyle}
      tabIndex="0"
      role="button"
      onClick={openLightbox}
      onKeyPress={keypressToClick}
    >
      <div className="gallery-item__spacer" style={imageSpacerStyle}></div>
      <GalleryItemOverlay image={image} />
      <Image image={image} />
    </div>
  );
};

export default GalleryItem;
