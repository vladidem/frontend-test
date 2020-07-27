import React, { useState, useContext, useEffect } from 'react';

import AddToPhotos from '@material-ui/icons/AddToPhotos';

import { useDropzone } from 'react-dropzone';

import cx from 'classnames';
import shortid from 'shortid';

import { GalleryContext } from './../gallery/GalleryContext';

const GalleryDropzoneOverlay = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const showOverlay = () => {
    setIsOverlayVisible(true);
  };
  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };

  const eventListeners = {
    dragenter: showOverlay,
    dragover: showOverlay,
    dragleave: hideOverlay,
    drop: hideOverlay,
  };

  useEffect(() => {
    Object.entries(eventListeners).map(([event, listener]) =>
      document.addEventListener(event, listener),
    );
    return () => {
      Object.entries(eventListeners).map(([event, listener]) =>
        document.removeEventListener(event, listener),
      );
    };
  }, []);

  const dropzoneOverlayClasses = {
    dropzone__overlay: true,
    dropzone__overlay_active: isOverlayVisible,
  };

  return (
    <div className={cx(dropzoneOverlayClasses)}>
      <AddToPhotos />
      <p>Перетащите файлы</p>
    </div>
  );
};

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
    dropzone: true,
    dropzone_active: isDragActive,
  };

  return (
    <div {...getRootProps({ className: cx(dropzoneClasses) })}>
      <button className="button" tabIndex="1">
        <input {...getInputProps()} />
        <AddToPhotos />
        <p>Выберите или перетащите файлы</p>
      </button>
      <GalleryDropzoneOverlay />
    </div>
  );
};

export default GalleryDropzone;
