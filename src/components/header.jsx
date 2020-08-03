import React from 'react';
import { string } from 'prop-types';

export const Header = ({ text }) => (
  <header>
    This is {text}
  </header>
);

Header.propTypes = {
  text: string.isRequired,
};
