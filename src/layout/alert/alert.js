import React from 'react';
import { connect } from 'react-redux';

import './alert.scss';

const Alert = ({ errors }) =>
  errors.length > 0 &&
  errors.map(error => (
    <div className='alert'>
      <div className='alert__item'>{error.msg}</div>
    </div>
  ));

const mapStateToProps = state => ({
  errors: state.recipes.errors
});

export default connect(mapStateToProps)(Alert);
