import React from 'react';

import MyTable from '../../components/Table/DataTable';
import SeachField from '../../components/SearchField/SearchFiled';
import SortByField from '../../components/SortByField/SortByField';
import Pagination from '../../components/Pagination/Pagination';
import AddButton from '../../components/AddButton/AddButton';

import './mainPage.styles.scss';

const MainPage = () => {
  return (
    <div className='main-page'>
      <div className='pages-filters'>
        <div className='searchAndSort'>
          <SeachField />
          <SortByField />
        </div>
        <AddButton />
      </div>
      <MyTable></MyTable>
      <Pagination />
    </div>
  );
};

export default MainPage;
