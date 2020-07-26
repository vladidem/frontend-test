import React, { useCallback, useContext } from 'react';

import AddToPhotos from '@material-ui/icons/AddToPhotos';

import { useDropzone } from 'react-dropzone';

import cx from 'classnames';
import shortid from 'shortid';

import { GalleryContext } from './../gallery/GalleryContext';

const GalleryDropzone = () => {
  const { addImages } = useContext(GalleryContext);
  const onDrop = (acceptedFiles) => {
    addImages(
      acceptedFiles.map((file) => ({
        url: URL.createObjectURL(file),
        id: shortid.generate(),
      })),
    );
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dropzoneClasses = {
    gallery__dropzone: true,
    gallery__dropzone_active: isDragActive,
  };

  return (
    <div {...getRootProps({ className: cx(dropzoneClasses) })}>
      <button className="button" tabIndex="1">
        <input {...getInputProps()} />
        <AddToPhotos />
        <p>Выберите или перетащите файлы</p>
      </button>
    </div>
  );
};

export default GalleryDropzone;
