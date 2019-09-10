import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { setSearchFocus } from '../../redux/recipe/recipeActions';

import './homepage.scss';

const HomePage = ({ setSearchFocus }) => {
  const onFind = e => {
    e.preventDefault();
    setSearchFocus();
  };
  return (
    <Fragment>
      <div className='hero'>
        <div className='hero__content'>
          <h1 className='heading-primary'>
            Millions of recipes at your fingertips.{' '}
            <span className='heading-primary--sub'>
              What will you cook today?
            </span>
          </h1>
          <button onClick={onFind} className='btn btn-primary'>
            Find your recipe
          </button>
          <button className='btn btn-secondary ml-2'>
            Restore previous search
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(
  null,
  { setSearchFocus }
)(HomePage);
