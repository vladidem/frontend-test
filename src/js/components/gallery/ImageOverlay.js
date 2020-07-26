import React, { useContext } from 'react';

import DeleteIcon from '@material-ui/icons/DeleteForeverSharp';

import { GalleryContext } from './GalleryContext';

const ImageOverlay = ({ image }) => {
  const { id } = image;
  const { deleteImage } = useContext(GalleryContext);

  return (
    <div className="gallery-item__overlay">
      <button
        className="button button_icon button_delete"
        onClick={() => deleteImage(id)}
        tabIndex="1"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ImageOverlay;
