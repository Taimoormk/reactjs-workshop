import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputWithHooksFromState } from '../redux/selectors';
import { updateInputWithHooks } from '../redux/actions';
import { StyledInput, StyledLabel } from './styled';

export const InputWithReduxState = () => {
  // dispatch
  const dispatch = useDispatch();

  // selectors
  const inputWithHooks = useSelector(selectInputWithHooksFromState);

  return (
    <Fragment>
      <StyledLabel>Input value</StyledLabel>
      <StyledInput
        value={inputWithHooks}
        onChange={(e) => dispatch(updateInputWithHooks(e.target.value))}
        isActive={false}
      />
    </Fragment>
  );
};
