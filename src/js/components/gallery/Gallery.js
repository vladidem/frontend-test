import React, { useContext } from 'react';

import { GalleryContext } from './GalleryContext';

import GalleryItem from './GalleryItem';
import GalleryPlaceholder from './GalleryPlaceholder';

const Gallery = () => {
  const { images } = useContext(GalleryContext);

  return (
    <div className="gallery">
      {images.length ? images.map((image) => (
        <GalleryItem key={image.id} image={image} />
      )):<GalleryPlaceholder/>}
    </div>
  );
};

export default Gallery;
