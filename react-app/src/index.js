import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import '../node_modules/material-design-lite/material.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
