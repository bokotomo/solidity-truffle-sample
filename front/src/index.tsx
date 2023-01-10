import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './pages';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line import/no-named-as-default-member
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
