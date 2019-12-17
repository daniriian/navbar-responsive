import React, { useState } from 'react';

import MenuButton from './MenuButton/MenuButton.component';
import useDocumentScrollThrottled from '../DocumentScrollThrottle';

import {
  Nav,
  Overlay,
  NavContainer,
  Logo,
  Menu,
  MenuLink
} from './Navbar.styles';

const Navbar = ({ logo, menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [transparentNav, setTransparentNav] = useState(true);

  const MINIMUM_SCROLL = 180;
  const TIMEOUT_DELAY = 100;

  const inverseMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setTransparentNav(!(isScrolledDown && isMinimumScrolled));
    }, TIMEOUT_DELAY);
  });

  return (
    <Nav transparent={transparentNav}>
      <Overlay active={menuOpen} onClick={menuOpen ? inverseMenu : null} />

      <NavContainer>
        <Logo>
          <a href="/">{logo}</a>
        </Logo>
        <MenuButton onClick={inverseMenu} />
        <Menu opened={menuOpen}>
          <ul>
            {menuItems.map((item, index) => (
              <MenuLink key={index}>
                <a href={item.address}>{item.name}</a>
              </MenuLink>
            ))}
          </ul>
        </Menu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
