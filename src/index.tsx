import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './App';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
