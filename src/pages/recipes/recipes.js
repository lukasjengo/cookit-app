import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Recipe from '../../components/recipe/recipe';
import RecipeList from '../../components/recipeList/recipeList';

const Recipes = ({ match, searchRecipeList }) => (
  <div className='recipes-page'>
    <RecipeList recipeList={searchRecipeList} />
    <Route path={`${match.path}/:recipeTitle`} component={Recipe} />
  </div>
);

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList
});

export default connect(mapStateToProps)(Recipes);
