import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './components/Gallery';
import { GalleryProvider } from './components/GalleryContext';

import '../css/style.scss';

const wrapper = document.getElementById('container');

ReactDOM.render(
  <GalleryProvider>
    <Gallery />
  </GalleryProvider>,
  wrapper,
);
