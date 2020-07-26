import React from 'react';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibraryOutlined';

const GalleryPlaceholder = () => {
  return (
    <div className="gallery__placeholder">
      <PhotoLibraryIcon />
      Нет изображений
    </div>
  );
};

export default GalleryPlaceholder;
