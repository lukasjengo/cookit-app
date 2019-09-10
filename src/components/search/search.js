import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchRecipes, setLoading } from '../../redux/recipe/recipeActions';

import Spinner from '../../layout/spinner/spinner';
import CustomIcons from '../customIcons/customIcons';

import './search.scss';

const Search = ({
  searchRecipes,
  history,
  searchRecipeList,
  loading,
  setLoading,
  searchFocus
}) => {
  useEffect(() => {
    if (searchRecipeList.length !== 0) {
      // Redirect to recipes page
      history.push('/recipes');
    }

    if (searchFocus) {
      searchQuery.current.focus();
    }
  }, [searchRecipeList, history, searchFocus]);

  const searchQuery = createRef();

  const onSearch = e => {
    e.preventDefault();
    setLoading();
    searchRecipes(searchQuery.current.value);
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
          required
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
    { searchRecipes, setLoading }
  )
)(Search);

// Redirect to recipes page on search
