import { SELECT_IMAGE, CLOSE_LIGHTBOX } from './constants';

const selectImage = (image) => ({
  type: SELECT_IMAGE,
  payload: {
    image,
  },
});

const closeLightbox = () => ({
  type: CLOSE_LIGHTBOX,
})

export {
  selectImage, closeLightbox
};
