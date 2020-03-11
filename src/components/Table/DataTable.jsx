import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TableRow from './subComponents/TableRow';

import { setPages } from '../../redux/pages/pages.actions';
import { getAllPages } from '../../services/pages';

import './dataTable.styles.scss';

const DataTable = ({ pages, setPages }) => {
  useEffect(() => {
    getAllPages().then(pages => {
      return setPages(pages);
    });
  }, []);

  console.log(pages);

  return !pages.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <table className='main-table'>
      <caption className='tb-caption'>My Pages</caption>
      <thead>
        <tr className='tb-row'>
          <th scope='col'>Title</th>
          <th scope='col'>Description</th>
          <th scope='col'>Type</th>
          <th scope='col'>Is Active</th>
          <th scope='col'>Published On</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {pages.map(page => (
          <TableRow key={page.id} page={page}></TableRow>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  pages: state.pages
});

const mapDispatchToProps = dispatch => ({
  setPages: pages => dispatch(setPages(pages))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
