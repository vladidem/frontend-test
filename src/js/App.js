import React from 'react';

import { Provider } from 'react-redux';

import '../css/style.scss';

import Gallery from './components/gallery/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import GalleryControls from './components/galleryControls/GalleryControls';
import AlertList from './components/alerts/AlertList';
import { GalleryProvider } from './components/gallery/GalleryContext';

import store from './redux/store';

const App = () => (
  <div className="app">
    <Provider store={store}>
      <Header />
      <AlertList />
      <GalleryProvider>
        <GalleryControls />
        <Gallery />
      </GalleryProvider>
      <Footer />
    </Provider>
  </div>
);

export default App;
