import React, { useContext } from 'react';

import SettingsIcon from '@material-ui/icons/Settings';

import ButtonModal from '../modal/ButtonModal';
import { ModalContext } from '../modal/ModalContext';
import GalleryDropzone from './GalleryDropzone';
import AddFromUnsplashForm from './AddFromUnsplashForm';
import AddFromAnyForm from './AddFromAnyForm';
import SettingsForm from './SettingsForm';

const AddFromAnyButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="0">
      Добавить по ссылке или из JSON
    </button>
  );
};

const AddFromUnsplashButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="0">
      Добавить из unsplash
    </button>
  );
};

const SettingsButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="0">
      <SettingsIcon />
    </button>
  );
};

const GalleryControls = () => {
  return (
    <div className="gallery-controls">
      <GalleryDropzone />
      <ButtonModal OpenButton={AddFromAnyButton}>
        <AddFromAnyForm />
      </ButtonModal>
      <ButtonModal OpenButton={AddFromUnsplashButton}>
        <AddFromUnsplashForm />
      </ButtonModal>
      <ButtonModal OpenButton={SettingsButton}>
        <SettingsForm />
      </ButtonModal>
    </div>
  );
};

export default GalleryControls;
