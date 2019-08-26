import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCurrentRecipe } from '../../redux/recipe/recipeActions';

const RecipeListItem = ({
  recipe: { recipe_id, image_url, title, publisher },
  getCurrentRecipe
}) => (
  <Link
    to={`/recipes/${recipe_id}`}
    onClick={() => getCurrentRecipe(recipe_id)}
  >
    <li className='recipe-list__item'>
      <img className='recipe-list__img' src={image_url} alt='recipe' />
      <h4>{title}</h4>
      <span>By {publisher}</span>
    </li>
  </Link>
);

export default connect(
  null,
  { getCurrentRecipe }
)(RecipeListItem);
