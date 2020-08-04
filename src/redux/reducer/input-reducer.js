import * as TYPES from '../constants';

const initialState = {
  anotherObj: {
    input: '',
  }
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.UPDATE_INPUT:
      return { ...state, anotherObj: {
        ...state.anotherObj, input: action.payload,
      }}
      // return { ...state, input: action.payload };
      // const newState = state; // bad approach
      // newState.input = action.payload;
      // return newState;
      // return [ ...state ];
    default:
      return state;
  }
};
