import * as TYPES from '../constants';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_USER_ATTEMPT:
      return { ...state, isLoading: true };
    case TYPES.FETCH_USER_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case TYPES.FETCH_USER_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
