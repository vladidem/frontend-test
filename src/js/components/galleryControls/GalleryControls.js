import React, { useContext } from 'react';

import AddFromJsonForm from './AddFromJsonForm';
import AddFromLinkForm from './AddFromLinkForm';
import ButtonModal from '../modal/ButtonModal';
import { ModalContext } from '../modal/ModalContext';
import GalleryDropzone from './GalleryDropzone';

const AddFromJsonButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="1">
      Импортирвать из JSON
    </button>
  );
};

const AddFromLinkButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="1">
      Добавить по ссылке
    </button>
  );
};

const GalleryControls = () => {
  return (
    <div className="toolbar">
      <GalleryDropzone />
      <ButtonModal OpenButton={AddFromLinkButton}>
        <AddFromLinkForm />
      </ButtonModal>
      <ButtonModal OpenButton={AddFromJsonButton}>
        <AddFromJsonForm />
      </ButtonModal>
    </div>
  );
};

export default GalleryControls;
