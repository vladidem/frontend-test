const imagesSelector = (state) => state.images;

const nextImageSelector = (current) => (state) => {
  const images = imagesSelector(state);

  const currentIndex = images.findIndex((image) => image.id === current.id);

  const nextIndex = (currentIndex + 1) % images.length;

  return images[nextIndex];
};

const previousImageSelector = (current) => (state) => {
  const images = imagesSelector(state);

  const currentIndex = images.findIndex((image) => image.id === current.id);

  const previousIndex = (currentIndex - 1 + images.length) % images.length;

  return images[previousIndex];
};

export { imagesSelector, nextImageSelector, previousImageSelector };
