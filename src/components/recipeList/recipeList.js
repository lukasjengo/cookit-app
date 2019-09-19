import React from 'react';

import RecipeListItem from '../recipeListItem/recipeListItem';

const RecipeList = ({ recipeList, isLiked }) => {
  return (
    <aside className='recipe-side'>
      <h3 className='heading-tertiary u-text-center u-border-bottom-primary'>
        {isLiked ? 'Liked recipes' : 'Search results'}
      </h3>
      <ul className='recipe-list'>
        {recipeList.map(recipe => (
          <RecipeListItem recipe={recipe} key={recipe.recipe_id} />
        ))}
      </ul>
    </aside>
  );
};

export default RecipeList;
