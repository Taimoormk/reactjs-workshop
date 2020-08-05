import * as TYPES from '../constants';

export const updateInput = (data) => ({
  type: TYPES.UPDATE_INPUT,
  payload: data,
});

export const updateInputWithHooks = (data) => ({
  type: TYPES.UPDATE_INPUT_WITH_HOOKS,
  payload: data,
});
