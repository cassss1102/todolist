import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { middleware } from '../middleware/thunk';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(middleware)
  )
);

export default configureStore;
