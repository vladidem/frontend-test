import React from 'react';

import '../css/style.scss';

import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import GalleryControls from './components/GalleryControls';
import { GalleryProvider } from './components/GalleryContext';

const App = () => (
  <div className="app">
    <Header/>
    <GalleryProvider>
      <GalleryControls/>
      <Gallery />
    </GalleryProvider>
    <Footer />
  </div>
);

export default App;
