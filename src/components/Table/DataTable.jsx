import React from 'react';

import TableRow from './subComponents/TableRow';

import './dataTable.styles.scss';

const DataTable = ({ pages }) => {
  return !pages ? (
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

export default DataTable;
