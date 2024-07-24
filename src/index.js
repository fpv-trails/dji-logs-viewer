import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css'; // Import the CSS file


const root = createRoot(document.getElementById('map'));
root.render( // Use root.render instead of ReactDOM.render
  <React.StrictMode>
    <App />
  </React.StrictMode>
);