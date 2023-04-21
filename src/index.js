import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/*Bootstrap Configurations*/
import '../node_modules/react-bootstrap/dist/react-bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


