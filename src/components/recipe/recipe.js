import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';

import { likeRecipe, unlikeRecipe } from '../../redux/recipe/recipeActions';
import { normalizeTitle } from '../../utils/recipeUtils';

import Spinner from '../../layout/spinner/spinner';
import CustomIcons from '../customIcons/customIcons';

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
    // eslint-disable-next-line
  }, [likedRecipes, currentRecipe]);

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
    return <Spinner style={{ width: '10rem', height: '10rem' }} />;
  } else {
    // Normalize title
    const title = normalizeTitle(currentRecipe.title);

    // CREATE 404 COMPONENT
    if (match.params.recipeTitle !== title) {
      return <div className='not-found-404'>Page not found</div>;
    }

    return (
      <main className='recipe-content'>
        <div
          className='recipe__hero-img'
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)), url(${currentRecipe.image_url})`
          }}
        >
          <div className='recipe__hero-content'>
            <h1 className='heading-primary'>
              {currentRecipe.title}
              <span className='heading-primary--sub'>
                By {currentRecipe.publisher}
              </span>
            </h1>
            <button className='btn btn-primary' onClick={onLike}>
              {isLiked || match.path.includes('liked-recipes') ? (
                <Fragment>
                  <div className='u-flex-align-center'>
                    Unlike{' '}
                    <CustomIcons name='icon-heart' type='icon-primary ml' />
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className='u-flex-align-center'>
                    Like{' '}
                    <CustomIcons
                      name='icon-heart-outlined'
                      type='icon-primary ml'
                    />
                  </div>
                </Fragment>
              )}
            </button>
            <a
              className='btn btn-secondary ml-2'
              href={currentRecipe.source_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='u-flex-align-center'>
                More details{' '}
                <CustomIcons name='icon-link' type='icon-secondary ml' />
              </div>
            </a>
          </div>
        </div>
        <h3 className='heading-tertiary my-3'>Recipe ingredients</h3>
        <ul className='recipe__ingredients mb-3'>
          {currentRecipe.ingredients.map((ingr, index) => (
            <li key={index} className='recipe__ingredient u-flex-align-center'>
              <CustomIcons name='icon-checkmark' type='icon-primary' />
              {ingr.replace(/ *\([^)]*\) */g, ' ')}
            </li>
          ))}
        </ul>
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
