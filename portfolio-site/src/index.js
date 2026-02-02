import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// IMPORTANT: Import CSS here, not in App.jsx
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);