import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Recipe from '../../components/recipe/recipe';
import RecipeList from '../../components/recipeList/recipeList';

const LikedRecipes = ({ match, likedRecipes }) => (
  <div className='recipes-page'>
    <RecipeList recipeList={likedRecipes} isLiked={true} />
    <Route path={`${match.path}/:recipeTitle`} component={Recipe} />
  </div>
);

const mapStateToProps = state => ({
  likedRecipes: state.recipes.likedRecipes
});

export default connect(mapStateToProps)(LikedRecipes);
