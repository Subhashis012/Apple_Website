import React from 'react';
import { createRoot } from 'react-dom/client'; // Change here
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
