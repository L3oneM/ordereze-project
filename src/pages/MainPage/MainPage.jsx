import React from 'react';
import { Link } from 'react-router-dom';

import MyTable from '../../components/Table/DataTable';

import './mainPage.styles.scss';

const MainPage = () => {
  return (
    <div className='main-page'>
      <Link className='addButton' to='/newPage'>
        Add Page
      </Link>
      <MyTable></MyTable>
    </div>
  );
};

export default MainPage;
