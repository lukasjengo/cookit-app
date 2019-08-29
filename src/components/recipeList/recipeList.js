import React from 'react';

import { connect } from 'react-redux';

import RecipeListItem from '../recipeListItem/recipeListItem';

import './recipeList.scss';

const RecipeList = ({ searchRecipeList }) => {
  return (
    <ul className='recipe-list'>
      {searchRecipeList.map(recipe => (
        <RecipeListItem recipe={recipe} key={recipe.recipe_id} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList
});

export default connect(mapStateToProps)(RecipeList);
