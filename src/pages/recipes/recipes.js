import React from 'react';
import { Route } from 'react-router-dom';

import Recipe from '../../components/recipe/recipe';
import RecipeList from '../../components/recipeList/recipeList';

import './recipes.scss';

const Recipes = ({ match }) => (
  <div className='recipes-page'>
    <RecipeList />
    <Route path={`${match.path}/:recipeID`} component={Recipe} />
  </div>
);

export default Recipes;

// ${recipe.title
//   .toLowerCase()
//   .split(' ')
//   .join('-')}
