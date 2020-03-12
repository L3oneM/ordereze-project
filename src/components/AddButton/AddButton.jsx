import React from 'react';
import { Link } from 'react-router-dom';

import './addButton.styles.scss';

const AddButton = () => {
  return (
    <Link className='addButton' to='/newPage'>
      <i className='fas fa-plus'></i>
      <span>Add Page</span>
    </Link>
  );
};

export default AddButton;
