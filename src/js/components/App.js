import React from 'react';

import '../../css/style.scss';

import Gallery from './gallery/Gallery';
import Footer from './Footer';
import Header from './Header';
import GalleryControls from './galleryControls/GalleryControls';
import { GalleryProvider } from './gallery/GalleryContext';
import { AlertProvider } from './alerts/AlertContext';
import AlertList from './alerts/AlertList';

const App = () => (
  <div className="app">
    <Header />
    <AlertProvider>
      <AlertList />
      <GalleryProvider>
        <GalleryControls />
        <Gallery />
      </GalleryProvider>
    </AlertProvider>
    <Footer />
  </div>
);

export default App;
