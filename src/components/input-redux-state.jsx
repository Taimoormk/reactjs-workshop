import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputWithHooksFromState } from '../redux/selectors';
import { updateInputWithHooks } from '../redux/actions';

export const InputWithReduxState = () => {
  // dispatch
  const dispatch = useDispatch();

  // selectors
  const inputWithHooks = useSelector(selectInputWithHooksFromState);

  return (
    <input
      value={inputWithHooks}
      onChange={(e) => dispatch(updateInputWithHooks(e.target.value))}
    />
  );
};
