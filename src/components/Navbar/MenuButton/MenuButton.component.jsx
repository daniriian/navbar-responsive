import React from 'react';

import './MenuButton.style.scss';

const MenuButton = () => {
  return (
    <button className="hamburger">
      <div className="bars">
        <div className="button-bar"></div>
        <div className="button-bar"></div>
        <div className="button-bar"></div>
      </div>
    </button>
  );
};

export default MenuButton;
