import React, { useRef, Suspense } from 'react';

import { useDispatch } from 'react-redux';

import { useImage } from 'react-image';

import { ErrorBoundary } from 'react-error-boundary';

import Placeholder from './Placeholder';
import ErrorPlaceholder from './ErrorPlaceholder';
import { updateImage } from '../../redux/images/actions';

const Image = ({ image }) => {
  const { url, id, width, height } = image;

  const { src } = useImage({
    srcList: url,
  });
  const ref = useRef();
  const dispatch = useDispatch();

  const onLoad = () => {
    if (!width || !height) {
      const dimensions = {
        width: ref.current.naturalWidth,
        height: ref.current.naturalHeight,
      };
      dispatch(updateImage(id, dimensions));
    }
  };

  return (
    <img
      className="gallery-item__img"
      src={src}
      onLoad={onLoad}
      ref={ref}
      loading="lazy"
    />
  );
};

const withSuspense = (Component) => ({ children, ...props }) => (
  <Suspense fallback={<Placeholder />}>
    <Component {...props}>{children}</Component>
  </Suspense>
);

const withErrorBoundary = (Component) => ({ children, ...props }) => (
  <ErrorBoundary fallback={<ErrorPlaceholder />}>
    <Component {...props}>{children}</Component>
  </ErrorBoundary>
);

export default withErrorBoundary(withSuspense(Image));
