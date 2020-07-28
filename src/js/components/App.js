import React from 'react';

import { Provider } from 'react-redux';

import '../../css/style.scss';

import Gallery from './gallery/Gallery';
import Footer from './Footer';
import Header from './Header';
import GalleryControls from './galleryControls/GalleryControls';
import { GalleryProvider } from './gallery/GalleryContext';
import AlertList from './alerts/AlertList';

import store from './../redux/store';

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
