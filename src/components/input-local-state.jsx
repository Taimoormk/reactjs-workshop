import React, { useState } from 'react';

export const InputWithLocalState = () => {
  const [ value, setValue ] = useState('');

  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} />
  );
};
