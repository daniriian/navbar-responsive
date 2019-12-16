import React, {useState} from 'react';

import MenuButton from './MenuButton/MenuButton.component';

import './Navbar.styles.scss';

const Navbar = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  const inverseMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='nav'>
      <div
        className={'overlay' + (menuOpen ? ' add_overlay' : '')}
        onClick={inverseMenu}
      ></div>

      <div className='nav-container'>
        <div className='logo'>
          <a href='/'>{props.logo}</a>
        </div>
        <MenuButton onClick={inverseMenu} />
        <div className={'menu' + (menuOpen ? ' menu_open' : '')}>
          <ul>
            <li className='menu-item'>
              <a href='https://www.yahoo.com'>Link</a>
            </li>
            <li className='menu-item'>
              <a href='www.yahoo.com'>Link</a>
            </li>
            <li className='menu-item'>
              <a href='www.yahoo.com'>Link</a>
            </li>
            <li className='menu-item'>
              <a href='www.yahoo.com'>Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
