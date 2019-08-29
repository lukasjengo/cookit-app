import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchRecipes, setLoading } from '../../redux/recipe/recipeActions';

import Spinner from '../../layout/spinner/spinner';

import './search.scss';

const Search = ({
  searchRecipes,
  history,
  searchRecipeList,
  loading,
  setLoading
}) => {
  // useEffect(() => {
  //   if (searchRecipeList !== null) {
  //     // Redirect to recipes page
  //     history.push('/recipes');
  //   }
  // }, [searchRecipeList, history]);

  const searchQuery = useRef('');

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
          type='search'
          className='search__input'
          ref={searchQuery}
          required
        />
        <button className='search__btn'>
          {loading ? <Spinner /> : 'Search'}
        </button>
      </form>
    </React.Fragment>
  );
};

Search.propTypes = {
  searchRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList,
  loading: state.recipes.loading
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { searchRecipes, setLoading }
  )
)(Search);

// Redirect to recipes page on search
