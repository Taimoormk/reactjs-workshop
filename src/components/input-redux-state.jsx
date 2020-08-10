import React, { Fragment, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputWithHooksFromState, selectUserNameFromState } from '../redux/selectors';
import { updateInputWithHooks, fetchGithubUser } from '../redux/actions';
import { StyledInput, StyledLabel } from './styled';
import { Button } from './button';

export const InputWithReduxState = () => {
  // dispatch
  const dispatch = useDispatch();

  // selectors
  const inputWithHooks = useSelector(selectInputWithHooksFromState);
  const userName = useSelector(selectUserNameFromState);

  const fetchHandler = useCallback(() => {
    dispatch(fetchGithubUser(inputWithHooks));
  }, [dispatch, inputWithHooks]);

  return (
    <Fragment>
      <StyledLabel>Input value</StyledLabel>
      <StyledInput
        value={inputWithHooks}
        onChange={(e) => dispatch(updateInputWithHooks(e.target.value))}
        isActive={false}
      />
      <Button onClickHandler={fetchHandler} />

      <p>{userName}</p>
    </Fragment>
  );
};
