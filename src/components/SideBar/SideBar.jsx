import React, { useState } from 'react';

import './sideBar.styles.scss';
import { Link } from 'react-router-dom';

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
      <Link to='/' className='nav-btn nav-btn-option'>
        <i className='fas fa-home fa-2x'></i>
        <p className={`${isOpen ? 'fadeIn' : 'fadeOut'} animated`}>Home</p>
      </Link>
      <Link to='/' className='nav-btn nav-btn-option'>
        <i className='fas fa-pager fa-2x'></i>
        <p className={`${isOpen ? 'fadeIn' : 'fadeOut'} animated`}>Pages</p>
      </Link>
      <Link to='/' className='nav-btn nav-btn-option'>
        <i className='fas fa-cogs fa-2x'></i>
        <p className={`${isOpen ? 'fadeIn' : 'fadeOut'} animated`}>Settings</p>
      </Link>
    </div>
  );
};

export default SideBar;
