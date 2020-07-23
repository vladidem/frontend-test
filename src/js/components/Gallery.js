import React, { useContext } from 'react';

import { GalleryContext } from './GalleryContext';

import Image from './Image';

const Gallery = () => {
  const { images } = useContext(GalleryContext);

  return (
    <>
      <div>Gallery</div>
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </>
  );
};

export default Gallery;
