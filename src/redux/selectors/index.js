export const selectInputReducerFromState = (state) => state.inputReducer;
export const selectInputWithHooksFromState = (state) => selectInputReducerFromState(state).inputWithHooks;
