import React from 'react';

import { useSelector } from 'react-redux';

import { imagesSelector } from './../../redux/images/selectors';

import GalleryItem from './GalleryItem';
import GalleryPlaceholder from './GalleryPlaceholder';

const Gallery = () => {
  const images = useSelector(imagesSelector);

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
