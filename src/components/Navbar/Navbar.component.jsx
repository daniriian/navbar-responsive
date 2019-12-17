import React, { useState } from 'react';

import MenuButton from './MenuButton/MenuButton.component';
import useDocumentScrollThrottled from '../DocumentScrollThrottle';

import './Navbar.styles.scss';

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

  const transparentNavStyle = transparentNav ? 'transparent' : '';

  return (
    <nav className={'nav ' + transparentNavStyle}>
      <div
        className={'overlay' + (menuOpen ? ' add_overlay' : '')}
        onClick={menuOpen ? inverseMenu : null}
      ></div>

      <div className="nav-container">
        <div className="logo">
          <a href="/">{logo}</a>
        </div>
        <MenuButton onClick={inverseMenu} />
        <div className={'menu' + (menuOpen ? ' menu_open' : '')}>
          <ul>
            {menuItems.map((item, index) => (
              <li className="menu-item" key={index}>
                <a href={item.address}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
