import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import MainForm from '../../components/MainForm/MainForm';

import { getPage } from '../../services/pages';

import './editPage.styles.scss';

const EditPage = ({ location: { pageId } }) => {
  const [page, setPage] = useState({});

  useEffect(() => {
    getPage(pageId).then(page => setPage(page));
  }, []);

  return (
    <div className='main-page'>
      <MainForm EditPage page={page} />
    </div>
  );
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(EditPage);
