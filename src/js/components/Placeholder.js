import React, { useContext } from 'react';

import { GalleryContext } from './GalleryContext';

const Placeholder = () => {
  const { imageMinHeight } = useContext(GalleryContext);

  const placeholderStyle = {
    flexGrow: imageMinHeight,
    width: imageMinHeight,
  };

  return (
    <div
      className="gallery_item gallery_item_placeholder"
      style={placeholderStyle}
    ></div>
  );
};

export default Placeholder;
