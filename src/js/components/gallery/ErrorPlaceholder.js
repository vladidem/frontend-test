import React from 'react';

import ErrorIcon from '@material-ui/icons/ErrorOutline';

const ErrorPlaceholder = () => {
  return (
    <div className="gallery-item__img gallery-item__img--placeholder gallery-item__img--error">
      <ErrorIcon />
    </div>
  );
};

export default ErrorPlaceholder;
