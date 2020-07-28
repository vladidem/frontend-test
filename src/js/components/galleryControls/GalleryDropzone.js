import React, { useState, useContext, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useDropzone } from 'react-dropzone';

import AddToPhotos from '@material-ui/icons/AddToPhotos';

import cx from 'classnames';

import { addFromFiles } from '../../redux/images/actions';

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
  const dispatch = useDispatch();
  const onDrop = (files) => dispatch(addFromFiles(files));
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
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
