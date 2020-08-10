import React from 'react';

import { useDispatch } from 'react-redux';

import DeleteIcon from '@material-ui/icons/DeleteForeverSharp';

import { deleteImage } from '../../redux/images/actions';

const GalleryItemOverlay = ({ image }) => {
  const dispatch = useDispatch();
  const deleteCurrentImage = (e) => {
    e.stopPropagation();
    dispatch(deleteImage(id));
  };

  const { id } = image;

  return (
    <div className="gallery-item__overlay">
      <button
        className="button button--icon button--delete"
        onClick={deleteCurrentImage}
        tabIndex="0"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default GalleryItemOverlay;
