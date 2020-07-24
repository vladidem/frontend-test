import React from 'react';

import AddFromJsonForm from './AddFromJsonForm';
import AddFromLinkForm from './AddFromLinkForm';

const GalleryControls = () => {
  return (
    <div>
      <div>GalleryControls</div>
      <div className="gallery_controls">
        <AddFromLinkForm />
        <AddFromJsonForm />
      </div>
    </div>
  );
};

export default GalleryControls;
