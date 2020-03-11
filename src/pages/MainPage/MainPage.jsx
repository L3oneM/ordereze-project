import React from 'react';
import { Link } from 'react-router-dom';

import MyTable from '../../components/Table/DataTable';
import SeachField from '../../components/SearchField/SearchFiled';
import SortByField from '../../components/SortByField/SortByField';
import Pagination from '../../components/Pagination/Pagination';

import './mainPage.styles.scss';

const MainPage = () => {
  return (
    <div className='main-page'>
      <SeachField />
      <SortByField />
      <Link className='addButton' to='/newPage'>
        Add Page
      </Link>
      <MyTable></MyTable>
      <Pagination />
    </div>
  );
};

export default MainPage;
