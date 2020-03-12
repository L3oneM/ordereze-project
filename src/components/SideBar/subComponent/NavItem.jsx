import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { setCurrentPage } from '../../../redux/search/search.actions';

const NavItem = ({ icon, handleMenuClick, isOpen, text, setCurrentPage }) => {
  const handleClick = () => {
    if (text === 'Home') {
      setCurrentPage(1);
    }
    if (isOpen) {
      handleMenuClick();
    }
  };
  return (
    <Link to='/' className='nav-btn nav-btn-option' onClick={handleClick}>
      <i className={`fas fa-${icon} fa-2x`}></i>
      <p className={`${isOpen ? 'fadeIn' : 'fadeOut'} animated`}>{text}</p>
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentPage: number => dispatch(setCurrentPage(number))
});

export default connect(null, mapDispatchToProps)(NavItem);
