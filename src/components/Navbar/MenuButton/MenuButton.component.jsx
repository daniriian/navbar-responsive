import React from 'react';

import { Hamburger, HamburgerBars, Bar } from './Menu.style';

const MenuButton = props => {
  return (
    <Hamburger type="button" onClick={props.onClick}>
      <HamburgerBars>
        <Bar />
        <Bar />
        <Bar />
      </HamburgerBars>
    </Hamburger>
  );
};

export default MenuButton;
