import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import { rootReducer } from '../redux/reducer';

export const createReduxStore = () => {
  // apply middleware
  const middlewares = applyMiddleware(
    reduxLogger,
  );

  const store = createStore(rootReducer, middlewares);

  return store;
};
