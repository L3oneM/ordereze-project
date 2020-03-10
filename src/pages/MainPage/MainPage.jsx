import React from 'react';

import MyTable from '../../components/Table/DataTable';

import './mainPage.styles.scss';

const MainPage = ({ pages }) => {
  return (
    <div className='main-page'>
      <MyTable pages={pages}></MyTable>
    </div>
  );
};

export default MainPage;
