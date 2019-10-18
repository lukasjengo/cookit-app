import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ errors }) =>
  errors.length > 0 && (
    <div className='alert'>
      {errors.map(error => (
        <div className='alert__item' key={error.id}>
          {error.msg}
        </div>
      ))}
    </div>
  );

const mapStateToProps = state => ({
  errors: state.recipes.errors
});

export default connect(mapStateToProps)(Alert);
