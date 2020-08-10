import * as TYPES from '../constants';
import axios from 'axios';

export const updateInput = (data) => ({
  type: TYPES.UPDATE_INPUT,
  payload: data,
});

export const updateInputWithHooks = (data) => ({
  type: TYPES.UPDATE_INPUT_WITH_HOOKS,
  payload: data,
});

export const fetchUserAttempt = () => ({
  type: TYPES.FETCH_USER_ATTEMPT,
});

export const fetchUserSuccess = (data) => ({
  type: TYPES.FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFail = (err) => ({
  type: TYPES.FETCH_USER_FAIL,
  payload: err,
});

export const fetchGithubUser = (username) => {
  const thunk = async (dispatch) => {
    try {
      dispatch(fetchUserAttempt());
      const res = await axios(`https://api.github.com/users/${username}`);
      dispatch(fetchUserSuccess(res.data));
    } catch (err) {
      dispatch(fetchUserFail(err));
    }
  };
  return thunk;
};
