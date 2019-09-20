import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  searchRecipes,
  setLoading,
  setRecipeError
} from '../../redux/recipe/recipeActions';

import CustomIcons from '../customIcons/customIcons';

const Search = ({
  searchRecipes,
  history,
  loading,
  setLoading,
  searchFocus,
  setRecipeError
}) => {
  const searchQuery = createRef();

  useEffect(() => {
    if (searchFocus) {
      searchQuery.current.focus();
    }
    // eslint-disable-next-line
  }, [searchFocus]);

  const onSearch = e => {
    e.preventDefault();
    if (searchQuery.current.value === '') {
      return setRecipeError('Please enter something');
    }
    setLoading();
    searchRecipes(searchQuery.current.value, history);
    searchQuery.current.value = '';
  };

  return (
    <React.Fragment>
      <form className='search' onSubmit={onSearch}>
        <input
          placeholder='Search for incredible recipes'
          type='text'
          className='search__input'
          ref={searchQuery}
          disabled={loading}
        />
        <CustomIcons name='icon-search' type='icon-secondary' />
      </form>
    </React.Fragment>
  );
};

Search.propTypes = {
  searchRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList,
  loading: state.recipes.loading,
  searchFocus: state.recipes.searchFocus
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { searchRecipes, setLoading, setRecipeError }
  )
)(Search);

// Redirect to recipes page on search
