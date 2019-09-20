import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCurrentRecipe, setLoading } from '../../redux/recipe/recipeActions';
import { normalizeTitle } from '../../utils/recipeUtils';

const RecipeListItem = ({
  recipe: { recipe_id, image_url, title, publisher },
  getCurrentRecipe,
  setLoading,
  match
}) => {
  // Normalize SLUG title
  const slug = normalizeTitle(title);

  const onLinkClick = () => {
    setLoading();
    getCurrentRecipe(recipe_id);
  };

  if (match.path === '/recipes') {
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
  } else {
    return (
      <Link to={`/liked-recipes/${slug}`} onClick={onLinkClick}>
        <li className='recipe-list__item'>
          <img className='recipe-list__img' src={image_url} alt='recipe' />
          <div className='recipe-list__text'>
            <h4 className='recipe-list__title'>{title}</h4>
            <span className='recipe-list__publisher'>By {publisher}</span>
          </div>
        </li>
      </Link>
    );
  }
};

export default compose(
  withRouter,
  connect(
    null,
    { getCurrentRecipe, setLoading }
  )
)(RecipeListItem);
