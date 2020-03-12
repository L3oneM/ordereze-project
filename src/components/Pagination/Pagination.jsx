import React from 'react';
import { connect } from 'react-redux';

import {
  setCurrentPage,
  setPagesPerPage
} from '../../redux/search/search.actions';

import { totalPages } from '../../redux/pages/pages.selectors';
import {
  selectCurrentPage,
  selectPagesPerPage
} from '../../redux/search/filters.selectors';

import './pagination.styles.scss';

const Pagination = ({
  pagesPerPage,
  totalPages,
  setCurrentPage,
  setPagesPerPage,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / pagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination-cnt'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? 'active' : null}`}
            onClick={() => setCurrentPage(number)}
          >
            <span className='page-link'>{number}</span>
          </li>
        ))}
      </ul>
      <select
        name='pagesPerPage'
        defaultValue='10'
        onChange={event => setPagesPerPage(Number(event.target.value))}
        className='page-slctr'
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
      </select>
    </nav>
  );
};

const mapStateToProps = state => ({
  totalPages: totalPages(state),
  pagesPerPage: selectPagesPerPage(state),
  currentPage: selectCurrentPage(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentPage: numberOfPage => dispatch(setCurrentPage(numberOfPage)),
  setPagesPerPage: number => dispatch(setPagesPerPage(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
