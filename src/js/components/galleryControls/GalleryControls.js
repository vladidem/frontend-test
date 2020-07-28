import React, { useContext } from 'react';

import ButtonModal from '../modal/ButtonModal';
import { ModalContext } from '../modal/ModalContext';
import GalleryDropzone from './GalleryDropzone';
import AddFromUnsplashForm from './AddFromUnsplashForm';
import AddFromAnyForm from './AddFromAnyForm';

const AddFromAnyButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="1">
      Добавить по ссылке или из JSON
    </button>
  );
};

const AddFromUnsplashButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="1">
      Добавить из unsplash
    </button>
  );
};

const GalleryControls = () => {
  return (
    <div className="toolbar">
      <GalleryDropzone />
      <ButtonModal OpenButton={AddFromAnyButton}>
        <AddFromAnyForm />
      </ButtonModal>
      <ButtonModal OpenButton={AddFromUnsplashButton}>
        <AddFromUnsplashForm />
      </ButtonModal>
    </div>
  );
};

export default GalleryControls;
