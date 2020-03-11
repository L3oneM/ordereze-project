import React from 'react';

import { sortPagesBy } from '../../redux/search/search.actions';
import { connect } from 'react-redux';

const SortByField = ({ sortPagesBy }) => {
  const handleChange = event => {
    console.log(event.target.value);
    const credentials = event.target.value.split(':');

    sortPagesBy(credentials[0], credentials[1]);
  };

  return (
    <div>
      <h3>Sort By</h3>
      <select name='sortCategory' onChange={handleChange}>
        <option value='publishedOn:Desc'>Date Descending</option>
        <option value='publishedOn:Asc'>Date Ascending</option>
        <option value='title:Desc'>Title Descending</option>
        <option value='title:Asc'>Title Ascending</option>
        <option value='type:Desc'>Type Descending</option>
        <option value='type:Asc'>Type Ascending</option>
      </select>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  sortPagesBy: (category, direction) =>
    dispatch(sortPagesBy(category, direction))
});

export default connect(null, mapDispatchToProps)(SortByField);
