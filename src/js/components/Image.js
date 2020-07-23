import React from 'react';

const Image = ({ image }) => {
  const { url } = image;

  return <img src={url}></img>;
};

export default Image;
