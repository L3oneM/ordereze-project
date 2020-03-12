import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TableRow from './subComponents/TableRow';
import Spinner from '../Spinner/Spinner';

import { setPages } from '../../redux/pages/pages.actions';
import { getAllPages } from '../../services/pages';
import { pagesToShowWithPagination, pagesToShow } from '../../services/filters';

import './dataTable.styles.scss';

const DataTable = ({
  pages,
  setPages,
  filters: { search, sortBy, direction, pagesPerPage, currentPage }
}) => {
  useEffect(() => {
    getAllPages().then(pages => {
      return setPages(pages);
    });
  }, []);

  const indexOfLastPage = currentPage * pagesPerPage;
  const indexOfFirstPage = indexOfLastPage - pagesPerPage;

  return pages.length === 0 ? (
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
  pages: state.pages,
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setPages: pages => dispatch(setPages(pages))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
