import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { deletePage } from '../../../redux/pages/pages.actions';
import { removePage } from '../../../services/pages';

import './tableRow.styles.scss';

const TableRow = ({
  page: { id, title, description, type, isActive, publishedOn },
  deletePage
}) => {
  const handleDelete = () => {
    removePage(id).then(page => {
      deletePage(page.id);
    });
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
        <Link
          to={{
            pathname: '/editPage',
            pageId: id
          }}
        >
          <i className='fas fa-edit'></i>
        </Link>
      </td>
      <td data-label='Delete' onClick={handleDelete}>
        <i className='fas fa-trash-alt'></i>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  deletePage: pageId => dispatch(deletePage(pageId))
});

export default connect(null, mapDispatchToProps)(TableRow);
