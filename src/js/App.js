import React from 'react';

import Gallery from './components/Gallery';
import { GalleryProvider } from './components/GalleryContext';

import '../css/style.scss';

const App = () => (
  <GalleryProvider>
    <Gallery />
  </GalleryProvider>
);

export default App;
