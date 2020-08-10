import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { rootReducer } from '../redux/reducer';

export const createReduxStore = () => {
  // apply middleware
  const middlewares = applyMiddleware(
    reduxThunk,
    reduxLogger,
  );

  const store = createStore(rootReducer, middlewares);

  return store;
};
