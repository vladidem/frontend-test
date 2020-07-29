import React, { useRef, Suspense } from 'react';

import { useImage } from 'react-image';

import { ErrorBoundary } from 'react-error-boundary';

import Placeholder from './Placeholder';
import ErrorPlaceholder from './ErrorPlaceholder';

const Image = ({ setSize, targetSrc }) => {
  const { src } = useImage({
    srcList: targetSrc,
  });
  const ref = useRef();

  const onLoad = () =>
    setSize(ref.current.naturalWidth, ref.current.naturalHeight);

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
