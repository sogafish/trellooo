import { compose, createStore } from 'redux';
import reducers from '../reducers';

const store = () => {
  const createdStore = compose()(createStore);

  return createdStore(reducers);
};

export default store;
