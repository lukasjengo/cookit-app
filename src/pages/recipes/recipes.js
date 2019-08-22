import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentRecipe } from '../../redux/recipe/recipeActions';

import Recipe from '../../components/recipe/recipe';

import './recipes.scss';

const Recipes = ({ match, searchRecipeList, getCurrentRecipe }) => (
  <div className='recipes-page'>
    <ul className='recipe-list'>
      {searchRecipeList.map(recipe => (
        <Link
          to={`/recipes/${recipe.recipe_id}`}
          key={recipe.recipe_id}
          onClick={() => getCurrentRecipe(recipe.recipe_id)}
        >
          <li className='recipe-list__item'>
            <img
              className='recipe-list__img'
              src={recipe.image_url}
              alt='recipe'
            />
            <h4>{recipe.title}</h4>
            <span>By {recipe.publisher}</span>
          </li>
        </Link>
      ))}
    </ul>

    <Route path={`${match.path}/:recipeID`} component={Recipe} />
  </div>
);

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList
});

export default connect(
  mapStateToProps,
  { getCurrentRecipe }
)(Recipes);

// ${recipe.title
//   .toLowerCase()
//   .split(' ')
//   .join('-')}
