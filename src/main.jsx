import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Step 1: Import Provider
import store from './store.js'; // Step 2: Import store

// Step 3: Wrap App in Provider and pass the store
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
