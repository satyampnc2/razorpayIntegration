import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AlertState from './Context/AlertContext/AlertState'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <AlertState>
    <App />
  </AlertState>,
  document.getElementById('root')
);
registerServiceWorker();
