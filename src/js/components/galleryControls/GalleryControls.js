import React, { useContext } from 'react';

import AddFromJsonForm from './AddFromJsonForm';
import AddFromLinkForm from './AddFromLinkForm';
import ButtonModal from '../modal/ButtonModal';
import { ModalContext } from '../modal/ModalContext';

const AddFromJsonButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal}>
      Импортирвать из JSON
    </button>
  );
};

const AddFromLinkButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal}>
      Добавить по ссылке
    </button>
  );
};

const GalleryControls = () => {
  return (
    <div className="toolbar toolbar_right">
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
