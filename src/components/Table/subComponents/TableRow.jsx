import React from 'react';
import './tableRow.styles.scss';
import moment from 'moment';

const TableRow = ({
  page: { id, title, description, type, isActive, publishedOn }
}) => {
  const handleDelete = () => {
    console.log(id);
  };

  const date = moment(publishedOn).format('YYYY MM DD');

  const pageType = type === 0 ? 'Menu' : type === 1 ? 'Events' : 'Content';

  return (
    <tr className='tb-row'>
      <td data-label='title'>{title}</td>
      <td data-label='description'>{description}</td>
      <td data-label='type'>{pageType}</td>
      <td data-label='Is Active'>{isActive ? 'Yes' : 'No'}</td>
      <td data-label='Published On'>{date}</td>
      <td data-label='Edit'>
        <i className='fas fa-edit'></i>
      </td>
      <td data-label='Delete' onClick={handleDelete}>
        <i className='fas fa-trash-alt'></i>
      </td>
    </tr>
  );
};

export default TableRow;
