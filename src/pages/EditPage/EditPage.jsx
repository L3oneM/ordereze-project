import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MainForm from '../../components/MainForm/MainForm';

import { fetchSinglePageStartAsync } from '../../redux/pages/pages.actions';

import {
  selectSinglePage,
  selectIsPagesFetching
} from '../../redux/pages/pages.selectors';

const EditPage = ({
  location: { pageId },
  page,
  fetchSinglePageStartAsync
}) => {
  useEffect(() => {
    fetchSinglePageStartAsync(pageId);
  }, [fetchSinglePageStartAsync, pageId]);

  return (
    <div className='main-page'>
      <MainForm EditPage page={page} />
    </div>
  );
};

const mapStateToProps = state => ({
  page: selectSinglePage(state),
  isFetching: selectIsPagesFetching(state)
});

const mapDispatchToProps = dispatch => ({
  fetchSinglePageStartAsync: page => dispatch(fetchSinglePageStartAsync(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
