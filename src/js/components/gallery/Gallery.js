import React from 'react';

import { useSelector } from 'react-redux';

import GalleryItem from './GalleryItem';
import GalleryPlaceholder from './GalleryPlaceholder';

const Gallery = () => {
  const images = useSelector((state) => state.images);

  return (
    <div className="gallery">
      {images.length ? (
        images.map((image) => <GalleryItem key={image.id} image={image} />)
      ) : (
        <GalleryPlaceholder />
      )}
    </div>
  );
};

export default Gallery;
