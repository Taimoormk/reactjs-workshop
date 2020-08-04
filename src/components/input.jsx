import React from 'react';

export const Input = ({
  input,
  updateInput,
}) => {
  const inputHandler = (val) => updateInput(val);
 
  return (
    <input value={input} onChange={(e) => inputHandler(e.target.value)} />
  );
};
