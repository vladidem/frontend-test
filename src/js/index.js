import React from 'react';
import ReactDOM from 'react-dom';

import ReactModal from 'react-modal';

import App from './App';

const wrapper = document.getElementById('container');

ReactModal.setAppElement(wrapper);

ReactDOM.render(
  <App/>,
  wrapper,
);
