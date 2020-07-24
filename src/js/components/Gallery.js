import React, { useContext } from 'react';

import { GalleryContext } from './GalleryContext';

import GalleryItem from './GalleryItem';
import GalleryControls from './GalleryControls';

const Gallery = () => {
  const { images } = useContext(GalleryContext);

  return (
    <>
      <div>Gallery</div>
      <GalleryControls/>
      <div className="gallery">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
