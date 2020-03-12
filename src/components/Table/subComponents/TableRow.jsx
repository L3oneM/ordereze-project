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
    removePage(id)
      .then(page => {
        deletePage(page.id);
      })
      .catch(error => console.log(error));
  };

  const date = moment(publishedOn).format('DD MM YYYY');

  const pageType = type === 0 ? 'Menu' : type === 1 ? 'Events' : 'Content';

  return (
    <tr className='tb-row'>
      <td data-label='title'>{title}</td>
      <td data-label='description'>
        <span id='desc-span'>
          {description ? description : 'No Description'}
        </span>
      </td>
      <td data-label='type'>{pageType}</td>
      <td data-label='Is Active'>
        {isActive ? (
          <i className='fas fa-check'></i>
        ) : (
          <i className='fas fa-times'></i>
        )}
      </td>
      <td data-label='Published On'>{date}</td>
      <td data-label='Settings'>
        <Link
          className='settings-item'
          to={{
            pathname: '/editPage',
            pageId: id
          }}
        >
          <i className='fas fa-edit'></i>
        </Link>
        <i
          className='fas fa-trash-alt delete-btn settings-item'
          onClick={handleDelete}
        ></i>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  deletePage: pageId => dispatch(deletePage(pageId))
});

export default connect(null, mapDispatchToProps)(TableRow);
