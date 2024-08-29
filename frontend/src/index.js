import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServiceContextProvider from './Context/ServiceContext'; // Ensure the correct import path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServiceContextProvider>
      <App />
    </ServiceContextProvider>
  </React.StrictMode>
);

reportWebVitals();
