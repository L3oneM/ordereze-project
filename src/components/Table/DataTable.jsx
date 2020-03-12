import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TableRow from './subComponents/TableRow';
import Spinner from '../Spinner/Spinner';

import { fetchPagesStartAsync } from '../../redux/pages/pages.actions';

import { pagesToShowWithPagination, pagesToShow } from '../../services/filters';

import {
  selectPages,
  selectIsPagesFetching
} from '../../redux/pages/pages.selectors';
import { selectAllFilters } from '../../redux/search/filters.selectors';

import './dataTable.styles.scss';

const DataTable = ({
  pages,
  arePagesFetching,
  filters: { search, sortBy, direction, pagesPerPage, currentPage },
  fetchPagesStartAsync
}) => {
  useEffect(() => {
    console.log('I runn!!!');
    fetchPagesStartAsync();
  }, [fetchPagesStartAsync]);

  const indexOfLastPage = currentPage * pagesPerPage;
  const indexOfFirstPage = indexOfLastPage - pagesPerPage;

  return arePagesFetching ? (
    <Spinner />
  ) : (
    <table className='main-table'>
      <thead>
        <tr className='tb-row'>
          <th scope='col'>Title</th>
          <th scope='col'>Description</th>
          <th scope='col'>Type</th>
          <th scope='col'>Active</th>
          <th scope='col'>Published</th>
          <th scope='col'>Settings</th>
        </tr>
      </thead>
      <tbody>
        {pagesToShowWithPagination(
          pagesToShow(pages, search, sortBy, direction),
          indexOfFirstPage,
          indexOfLastPage
        ).map(page => (
          <TableRow key={page.id} page={page}></TableRow>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  pages: selectPages(state),
  filters: selectAllFilters(state),
  arePagesFetching: selectIsPagesFetching(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPagesStartAsync: () => dispatch(fetchPagesStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
