import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { setSearchFocus } from '../../redux/recipe/recipeActions';

const HomePage = ({ setSearchFocus, searchRecipeList, history }) => {
  const onFind = e => {
    e.preventDefault();
    setSearchFocus();
  };

  const onRestore = e => {
    e.preventDefault();
    if (searchRecipeList.length !== 0) {
      history.push('/recipes');
    }
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
          {searchRecipeList.length !== 0 && (
            <button onClick={onRestore} className='btn btn-secondary'>
              Previous search
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList
});

export default connect(
  mapStateToProps,
  { setSearchFocus }
)(HomePage);
