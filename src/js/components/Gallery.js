import React, { useContext } from 'react';

import { GalleryContext } from './GalleryContext';

import GalleryItem from './GalleryItem';

const Gallery = () => {
  const { images } = useContext(GalleryContext);

  return (
    <div className="gallery">
      {images.map((image) => (
        <GalleryItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
