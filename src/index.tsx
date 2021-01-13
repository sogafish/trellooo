import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { itemReducer } from './reducers';
import './index.css';

const store = createStore(itemReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
