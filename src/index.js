import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Concurrent Mode
ReactDOM.unstable_createRoot(document.getElementById('root')).render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
));
// Regular mode
// ReactDOM.render((
// <BrowserRouter>
//   <App />
// </BrowserRouter>
// ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
