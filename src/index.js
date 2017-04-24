import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import '../public/styles/index.css';
import Emitter from 'wolfy87-eventemitter';

window.ee = new Emitter();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
