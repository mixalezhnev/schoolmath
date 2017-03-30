import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../public/styles/index.css';
import Emitter from 'wolfy87-eventemitter';

window.ee = new Emitter();

ReactDOM.render(< App / >, document.getElementById('root'));
