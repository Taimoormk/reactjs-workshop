import { combineReducers } from 'redux';
import { testReducer } from './test-reducer';
import { inputReducer } from './input-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  testReducer,
  inputReducer,
  userReducer,
});
