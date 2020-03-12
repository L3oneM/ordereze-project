import React from 'react';

import { sortPagesBy } from '../../redux/search/search.actions';
import { connect } from 'react-redux';

import './sortByField.styles.scss';

const SortByField = ({ sortPagesBy }) => {
  const handleChange = event => {
    const credentials = event.target.value.split(':');

    sortPagesBy(credentials[0], credentials[1]);
  };

  return (
    <select
      name='sortCategory'
      onChange={handleChange}
      defaultValue='0'
      className='select-Field'
    >
      <option value='0' disabled>
        Sort By:
      </option>
      <option value='publishedOn:Desc'>Date Descending</option>
      <option value='publishedOn:Asc'>Date Ascending</option>
      <option value='title:Desc'>Title Descending</option>
      <option value='title:Asc'>Title Ascending</option>
      <option value='type:Desc'>Type Descending</option>
      <option value='type:Asc'>Type Ascending</option>
    </select>
  );
};

const mapDispatchToProps = dispatch => ({
  sortPagesBy: (category, direction) =>
    dispatch(sortPagesBy(category, direction))
});

export default connect(null, mapDispatchToProps)(SortByField);
