import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App/App';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter basename="/phonebook">
          <App />
        </BrowserRouter>{' '}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
