import React from 'react';
import { connect } from 'react-redux';

import {
  selectErrorMessage,
  selectSuccessMessage
} from '../../redux/pages/pages.selectors';

import './notification.styles.scss';

const Notification = ({ errorMessage, successMessage }) => {
  console.log(errorMessage, successMessage);
  if (errorMessage === undefined && successMessage === undefined) {
    return null;
  }

  return (
    <div className={`message ${errorMessage ? 'error' : ''}`}>
      <span>
        <i className={`fa fa-${errorMessage ? 'times-circle' : 'check'}`}></i>
        {errorMessage}
        {successMessage}
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  errorMessage: selectErrorMessage(state),
  successMessage: selectSuccessMessage(state)
});

export default connect(mapStateToProps)(Notification);
