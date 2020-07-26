import React from 'react';

import '../css/style.scss';

import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import GalleryControls from './components/GalleryControls';
import { GalleryProvider } from './components/GalleryContext';
import { AlertProvider } from './components/AlertContext';
import AlertList from './components/AlertList';

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
