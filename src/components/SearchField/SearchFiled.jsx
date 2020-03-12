import React from 'react';

import { connect } from 'react-redux';
import {
  searchByTitle,
  setCurrentPage
} from '../../redux/search/search.actions';

import './searchFiled.styles.scss';

const SearchFiled = ({ searchByTitle, setCurrentPage }) => {
  const handleSearchValueChange = event => {
    setCurrentPage(1);
    searchByTitle(event.target.value);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        name='search'
        placeholder='Search by Title...'
        className='search-input'
        onChange={handleSearchValueChange}
      />
      <i className='fas fa-search'></i>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  searchByTitle: value => dispatch(searchByTitle(value)),
  setCurrentPage: number => dispatch(setCurrentPage(number))
});

export default connect(null, mapDispatchToProps)(SearchFiled);
