import React, { useRef } from 'react';

import { useImage } from 'react-image';

const Image = ({ setSize, targetSrc }) => {
  const { src } = useImage({
    srcList: targetSrc,
  });
  const ref = useRef();
  const onLoad = () =>
    setSize(ref.current.naturalWidth, ref.current.naturalHeight);

  return (
    <img className="gallery_item__img" src={src} onLoad={onLoad} ref={ref} />
  );
};

export default Image;
