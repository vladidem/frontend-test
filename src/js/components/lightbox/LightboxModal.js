import React, { useEffect } from 'react';

import ReactModal from 'react-modal';

import { useSelector, useDispatch } from 'react-redux';

import get from 'lodash-es/get';

import CloseIcon from '@material-ui/icons/Close';
import NextIcon from '@material-ui/icons/SkipNext';
import PreviousIcon from '@material-ui/icons/SkipPrevious';

import { currentSelected } from '../../redux/lightbox/selectors';
import { closeLightbox } from '../../redux/lightbox/actions';
import { selectNext, selectPrevious } from '../../redux/lightbox/thunks';

const LightboxModal = () => {
  const dispatch = useDispatch();
  const current = useSelector(currentSelected);
  const isOpen = !!current;

  const close = () => dispatch(closeLightbox());
  const next = () => dispatch(selectNext());
  const previous = () => dispatch(selectPrevious());

  const registerListeners = (node) => {
    if (node) {
      node.addEventListener('click', (e) => {
        if (e.target === node) {
          close();
        }
      });
      node.addEventListener('keydown', (event) => {
        const code = event.keyCode;
        // if arrow left pressed
        if (code === 37) {
          previous();
        }
        // if arrow right pressed
        else if (code === 39) {
          next();
        }
      });
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      className="lightbox"
      overlayClassName="modal__overlay"
      onRequestClose={close}
      contentRef={registerListeners}
      shouldReturnFocusAfterClose={false}
    >
      <button
        className="button button--icon lightbox__button lightbox__close"
        onClick={close}
      >
        <CloseIcon className="icon" />
      </button>

      <button
        className="button button--icon lightbox__button lightbox__previous"
        onClick={previous}
      >
        <PreviousIcon className="icon" />
      </button>

      <div className="lightbox__image-container">
        <img className="lightbox__image" src={get(current, 'url')} />
      </div>

      <button
        className="button button--icon lightbox__button lightbox__next"
        onClick={next}
      >
        <NextIcon className="icon" />
      </button>
    </ReactModal>
  );
};

export default LightboxModal;
