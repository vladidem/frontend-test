import React from 'react';

import ErrorIcon from '@material-ui/icons/ErrorOutline';

const ErrorPlaceholder = () => {
  return (
    <div className="gallery-item__img gallery-item__img_placeholder gallery-item__img_error">
      <ErrorIcon />
    </div>
  );
};

export default ErrorPlaceholder;
