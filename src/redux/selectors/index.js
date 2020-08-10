const selectInputReducerFromState = (state) => state.inputReducer;
const selectAnotherObjFromState = (state) => selectInputReducerFromState(state).anotherObj;
export const selectInputWithHooksFromState = (state) => selectAnotherObjFromState(state).inputWithHooks;

const selectUserReducerFromState = (state) => state.userReducer;
export const selectIsLoadingFromtState = (state) => selectUserReducerFromState(state).isLoading;
const selectDataFromtState = (state) => selectUserReducerFromState(state).data;
export const selectErrorFromtState = (state) => selectUserReducerFromState(state).error;

export const selectUserNameFromState = (state) => selectDataFromtState(state)?.name;
