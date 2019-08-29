import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCurrentRecipe, setLoading } from '../../redux/recipe/recipeActions';

import './recipeListItem.scss';

const RecipeListItem = ({
  recipe: { recipe_id, image_url, title, publisher },
  getCurrentRecipe,
  setLoading
}) => {
  // Normalize SLUG title
  let slug = title.toLowerCase().replace(/[^a-zA-Z ]/g, '');
  slug = slug.split(' ').join('-');

  const onLinkClick = () => {
    setLoading();
    getCurrentRecipe(recipe_id);
  };

  return (
    <Link to={`/recipes/${slug}`} onClick={onLinkClick}>
      <li className='recipe-list__item'>
        <img className='recipe-list__img' src={image_url} alt='recipe' />
        <div className='recipe-list__text'>
          <h4 className='recipe-list__title'>{title}</h4>
          <span className='recipe-list__publisher'>By {publisher}</span>
        </div>
      </li>
    </Link>
  );
};

export default connect(
  null,
  { getCurrentRecipe, setLoading }
)(RecipeListItem);
