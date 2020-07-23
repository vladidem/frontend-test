import React from 'react';

const GalleryItem = ({ image }) => {
  const { url } = image;

  return (
    <div className="gallery_item">
      <i className="gallery_item__i"></i>
      <img className="gallery_item__img" src={url}></img>
    </div>
  );
};

export default GalleryItem;
