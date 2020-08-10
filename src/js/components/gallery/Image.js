import React, { useRef, Suspense, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { ErrorBoundary } from 'react-error-boundary';

import cx from 'classnames';

import Placeholder from './Placeholder';
import ErrorPlaceholder from './ErrorPlaceholder';
import { updateImage } from '../../redux/images/actions';

const pollImageSize = (id, ref, dispatch) => {
  const poll = setInterval(() => {
    if (ref.current && ref.current.naturalHeight && ref.current.naturalWidth) {
      const dimensions = {
        width: ref.current.naturalWidth,
        height: ref.current.naturalHeight,
      };
      dispatch(updateImage(id, dimensions));
      clearInterval(poll);
    }
  }, 50);
  return () => clearInterval(poll);
};

const Image = ({ image }) => {
  const { url, id, width, height } = image;

  const [loading, setLoading] = useState(true);
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!width || !height) {
      return pollImageSize(id, ref, dispatch);
    }
  }, [id]);

  const onLoad = () => {
    setLoading(false);
  };

  const displayPlaceholder = loading || !width || !height;
  const classes = {
    'gallery-item__img': true,
    'gallery-item__img--hidden': displayPlaceholder,
  };

  return (
    <>
      <img
        className={cx(classes)}
        src={url}
        onLoad={onLoad}
        ref={ref}
        loading="lazy"
      />
      {displayPlaceholder && <Placeholder />}
    </>
  );
};

const withErrorBoundary = (Component) => ({ children, ...props }) => (
  <ErrorBoundary fallback={<ErrorPlaceholder />}>
    <Component {...props}>{children}</Component>
  </ErrorBoundary>
);

export default withErrorBoundary(Image);
