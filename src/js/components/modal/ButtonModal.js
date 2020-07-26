import React, { useContext } from 'react';

import ReactModal from 'react-modal';

import CloseIcon from '@material-ui/icons/Close';

import { ModalContext, withModalProvider } from './ModalContext';

const DefaultOpenButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="1">
      Открыть
    </button>
  );
};

const DefaultCloseButton = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className="toolbar toolbar_right">
      <button
        className="button button_small button_icon"
        onClick={closeModal}
        tabIndex="1"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

const ButtonModal = ({
  children,
  OpenButton = DefaultOpenButton,
  CloseButton = DefaultCloseButton,
}) => {
  const { isOpen, closeModal } = useContext(ModalContext);

  return (
    <>
      <OpenButton />
      <ReactModal
        isOpen={isOpen}
        className="modal__content"
        overlayClassName="modal__overlay"
        onRequestClose={closeModal}
      >
        <CloseButton />
        {children}
      </ReactModal>
    </>
  );
};

export default withModalProvider(ButtonModal);
