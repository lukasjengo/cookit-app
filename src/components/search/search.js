import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchRecipes } from '../../redux/recipe/recipeActions';

import './search.scss';

const Search = ({ searchRecipes, history, searchRecipeList }) => {
  useEffect(() => {
    if (searchRecipeList !== null) {
      // Redirect to recipes page
      history.push('/recipes');
    }
  }, [searchRecipeList, history]);

  const searchQuery = useRef('');

  const onSearch = e => {
    e.preventDefault();
    searchRecipes(searchQuery.current.value);
    searchQuery.current.value = '';
  };

  return (
    <React.Fragment>
      <form className='search' onSubmit={onSearch}>
        <input
          placeholder='Search for incredible recipes'
          type='search'
          className='search__input'
          ref={searchQuery}
          required
        />
        <button className='search__btn'>Search</button>
      </form>
    </React.Fragment>
  );
};

Search.propTypes = {
  searchRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { searchRecipes }
  )
)(Search);

// Redirect to recipes page on search
