import React, { useState, useContext, useEffect } from 'react';

import AddToPhotos from '@material-ui/icons/AddToPhotos';

import { useDropzone } from 'react-dropzone';

import cx from 'classnames';
import shortid from 'shortid';

import { GalleryContext } from './../gallery/GalleryContext';

const GalleryDropzone = () => {
  const { addImages } = useContext(GalleryContext);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const showOverlay = () => {
    setIsOverlayVisible(true);
  };
  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };
  useEffect(() => {
    document.addEventListener('dragenter', showOverlay);
    document.addEventListener('dragover', showOverlay);
    document.addEventListener('dragleave', hideOverlay);
    document.addEventListener('drop', hideOverlay);
    return () => {
      document.removeEventListener('dragenter', showOverlay);
      document.removeEventListener('dragover', showOverlay);
      document.removeEventListener('dragleave', hideOverlay);
      document.removeEventListener('drop', hideOverlay);
    }
  }, []);


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
    dropzone: true,
    dropzone_active: isDragActive,
  };

  const dropzoneOverlayClasses = {
    dropzone__overlay: true,
    dropzone__overlay_active: isOverlayVisible,
  };

  return (
    <div {...getRootProps({ className: cx(dropzoneClasses) })}>
      <button className="button" tabIndex="1">
        <input {...getInputProps()} />
        <AddToPhotos />
        <p>Выберите или перетащите файлы</p>
      </button>
      <div className={cx(dropzoneOverlayClasses)}>
        <AddToPhotos />
        <p>Перетащите файлы</p>
      </div>
    </div>
  );
};

export default GalleryDropzone;
