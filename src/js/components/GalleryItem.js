import React, { useContext, useState, useRef, Suspense } from 'react';

import { GalleryContext } from './GalleryContext';

import Image from './Image';
import Placeholder from './Placeholder';

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
    <Suspense fallback={<Placeholder />}>
      <div className="gallery_item" style={galleryItemStyle}>
        <div style={imageSpacerStyle}></div>
        <Image targetSrc={url} setSize={setSize} />
      </div>
    </Suspense>
  );
};

export default GalleryItem;
