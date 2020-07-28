import React from 'react';

import { useDispatch } from 'react-redux';

import DeleteIcon from '@material-ui/icons/DeleteForeverSharp';
import { deleteImage } from '../../redux/images/actions';

const ImageOverlay = ({ image }) => {
  const dispatch = useDispatch();
  const { id } = image;

  return (
    <div className="gallery-item__overlay">
      <button
        className="button button_icon button_delete"
        onClick={() => dispatch(deleteImage(id))}
        tabIndex="1"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ImageOverlay;
