import React, { useState } from 'react';

import NavItem from './subComponent/NavItem';
import { navItems } from './subComponent/navItemsData';

import './sideBar.styles.scss';

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`nav-bar-ctn ${isOpen ? 'expand' : ''}`}>
      <div className='nav-btn' onClick={handleMenuClick}>
        <button
          className={`hamburger hamburger--spring ${
            isOpen ? 'is-active' : ''
          } `}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>
      {navItems.map(({ icon, text, link, id }) => (
        <NavItem
          key={id}
          icon={icon}
          text={text}
          link={link}
          isOpen={isOpen}
          handleMenuClick={handleMenuClick}
        />
      ))}
    </div>
  );
};

export default SideBar;
