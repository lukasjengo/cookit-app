import React from 'react';

import RecipeListItem from '../recipeListItem/recipeListItem';

import './recipeList.scss';

const RecipeList = ({ recipeList }) => {
  return (
    <ul className='recipe-list'>
      {recipeList.map(recipe => (
        <RecipeListItem recipe={recipe} key={recipe.recipe_id} />
      ))}
    </ul>
  );
};

export default RecipeList;

// if(likedRecipes.length < 1) {
//   return (
//     <ul className='recipe-list'>
//       {recipeList.map(recipe => {
//         const isLiked = likedRecipes.find(likedRecipe => likedRecipe.recipe_id === recipe.recipe_id);
//         return (
//           <RecipeListItem
//             recipe={recipe}
//             key={recipe.recipe_id}
//             isLiked={isLiked ? true : false}
//           />)

//       })}
//     </ul>
//   );
// }
