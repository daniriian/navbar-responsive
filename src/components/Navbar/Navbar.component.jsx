import React from 'react';

import MenuButton from './MenuButton/MenuButton.component';

import './Navbar.styles.scss';

const Navbar = props => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
          <a href="/">{props.logo}</a>
        </div>
        <MenuButton />
        <div className="menu">
          <ul>
            <li className="menu-item">link</li>
            <li className="menu-item">link</li>
            <li className="menu-item">link</li>
            <li className="menu-item">link</li>
            <li className="menu-item">link</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
