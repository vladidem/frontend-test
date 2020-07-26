import React, { useContext, useState } from 'react';

import { GalleryContext } from './GalleryContext';

import Image from './Image';
import ImageOverlay from './ImageOverlay';

const GalleryItem = ({ image }) => {
  const { url } = image;
  const { imageMinHeight } = useContext(GalleryContext);

  const [ratio, setRatio] = useState(1);
  const setSize = (width, height) => {
    if (width && height) {
      setRatio(width / height);
    }
  };

  const galleryItemStyle = {
    flexGrow: imageMinHeight * ratio,
    width: imageMinHeight * ratio,
  };

  const imageSpacerStyle = {
    paddingBottom: `${(1 / ratio) * 100}%`,
  };

  return (
    <div className="gallery-item" style={galleryItemStyle} tabIndex="1">
      <div style={imageSpacerStyle}></div>
      <ImageOverlay image={image} />
      <Image targetSrc={url} setSize={setSize} />
    </div>
  );
};

export default GalleryItem;
