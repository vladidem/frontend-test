import React, { useContext } from 'react';

import ReactModal from 'react-modal';

import CloseIcon from '@material-ui/icons/Close';

import { ModalContext, withModalProvider } from './ModalContext';

const DefaultOpenButton = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <button className="button" onClick={openModal} tabIndex="0">
      Открыть
    </button>
  );
};

const DefaultCloseButton = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className="modal__controls">
      <button
        className="button button--small button--icon"
        onClick={closeModal}
        tabIndex="0"
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
