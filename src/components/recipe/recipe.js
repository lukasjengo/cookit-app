import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { likeRecipe, unlikeRecipe } from '../../redux/recipe/recipeActions';

import Spinner from '../../layout/spinner/spinner';
import CustomIcons from '../customIcons/customIcons';

import './recipe.scss';

const Recipe = ({
  currentRecipe,
  match,
  history,
  loading,
  likeRecipe,
  unlikeRecipe,
  likedRecipes
}) => {
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    if (
      match.path.includes('liked-recipes') ||
      likedRecipes.find(recipe => recipe.recipe_id === currentRecipe.recipe_id)
    ) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [likedRecipes, currentRecipe, match.path]);

  const onLike = e => {
    e.preventDefault();
    if (!isLiked) {
      setLiked(true);
      likeRecipe(currentRecipe);
    } else {
      setLiked(false);
      if (match.path.includes('liked-recipes')) history.push('/liked-recipes');
      unlikeRecipe(currentRecipe.recipe_id);
    }
  };
  if (loading) {
    return <Spinner style={{ width: '5rem', height: '5rem' }} />;
  } else {
    // Normalize title
    let title = currentRecipe.title.toLowerCase().replace(/[^a-zA-Z ]/g, '');
    title = title.split(' ').join('-');

    // CREATE 404 COMPONENT
    if (match.params.recipeTitle !== title) {
      return <React.Fragment>Page Not found</React.Fragment>;
    }

    return (
      <main className='recipe-content'>
        <div
          className='recipe__hero-img'
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0, .2), rgba(0,0,0, .4)), url(${currentRecipe.image_url})`
          }}
        >
          <h1 className='recipe__title'>{currentRecipe.title} </h1>
          <span className='recipe__publisher'>{currentRecipe.publisher}</span>
        </div>
        <h3 className='heading-tertiary'>Recipe ingredients</h3>
        <ul className='recipe__ingredients'>
          {currentRecipe.ingredients.map((ingr, index) => (
            <li key={index} className='recipe__ingredient'>
              <CustomIcons name='icon-checkmark' type='icon-primary' />
              {ingr.replace(/ *\([^)]*\) */g, ' ')}
            </li>
          ))}
        </ul>
        <button onClick={onLike}>
          {isLiked || match.path.includes('liked-recipes') ? 'Unlike' : 'Like'}
        </button>
      </main>
    );
  }
};

const mapStateToProps = state => ({
  currentRecipe: state.recipes.currentRecipe,
  loading: state.recipes.loading,
  likedRecipes: state.recipes.likedRecipes
});

export default connect(
  mapStateToProps,
  { likeRecipe, unlikeRecipe }
)(Recipe);
