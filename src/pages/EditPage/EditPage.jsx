import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MainForm from '../../components/MainForm/MainForm';

import { getPage } from '../../services/pages';
import { setOnePage } from '../../redux/pages/pages.actions';

import './editPage.styles.scss';

const EditPage = ({ location: { pageId }, setOnePage, page }) => {
  useEffect(() => {
    getPage(pageId).then(page => setOnePage(page));
  }, []);

  return (
    <div className='main-page'>
      <MainForm EditPage page={page} />
    </div>
  );
};

const mapStateToProps = state => ({
  page: state.pagesState.page
});

const mapDispatchToProps = dispatch => ({
  setOnePage: page => dispatch(setOnePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
