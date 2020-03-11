import React from 'react';

import { connect } from 'react-redux';
import { searchByTitle } from '../../redux/search/search.actions';

import './searchFiled.styles.scss';

const SearchFiled = ({ searchByTitle }) => {
  const handleSearchValueChange = event => {
    console.log(event.target.value);
    searchByTitle(event.target.value);
  };

  return (
    <input
      type='text'
      name='search'
      placeholder='Search by Title...'
      className='search-input'
      onChange={handleSearchValueChange}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  searchByTitle: value => dispatch(searchByTitle(value))
});

export default connect(null, mapDispatchToProps)(SearchFiled);
