import React from 'react';
import { connect } from 'react-redux';

import {
  setCurrentPage,
  setPagesPerPage
} from '../../redux/search/search.actions';

import './pagination.styles.scss';

const Pagination = ({
  pagesPerPage,
  totalPages,
  setCurrentPage,
  setPagesPerPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / pagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <select
        name='pagesPerPage'
        defaultValue='10'
        onChange={event => setPagesPerPage(Number(event.target.value))}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
      </select>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <span onClick={() => setCurrentPage(number)} className='page-link'>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  totalPages: state.pages.length,
  pagesPerPage: state.filters.pagesPerPage
});

const mapDispatchToProps = dispatch => ({
  setCurrentPage: numberOfPage => dispatch(setCurrentPage(numberOfPage)),
  setPagesPerPage: number => dispatch(setPagesPerPage(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
