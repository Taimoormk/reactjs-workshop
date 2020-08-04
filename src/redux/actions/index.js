import * as TYPES from '../constants';

export const updateInput = (data) => ({
  type: TYPES.UPDATE_INPUT,
  payload: data,
});
