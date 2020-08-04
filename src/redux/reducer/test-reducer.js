const initialState = {
  test: 'dummy'
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
};
