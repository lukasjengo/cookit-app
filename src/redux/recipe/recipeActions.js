import axios from 'axios';
import uuid from 'uuid';
import {
  SEARCH_RECIPES,
  GET_CURRENT_RECIPE,
  CLEAR_CURRENT_RECIPE,
  LIKE_RECIPE,
  UNLIKE_RECIPE,
  SET_LOADING,
  SET_RECIPE_ERROR,
  REMOVE_RECIPE_ERROR,
  SET_SEARCH_FOCUS
} from './recipeTypes';

// Search API for recipes
export const searchRecipes = searchQuery => async dispatch => {
  try {
    const res = await axios.get(
      `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_RECIPE_API_KEY}&q=${searchQuery}`
    );
    if (res.data.error) {
      const err = `API ${res.data.error} reached, please try again later`;
      console.log(err);
      setRecipeError(err);
    }
    const data = res.data.recipes;
    dispatch({
      type: SEARCH_RECIPES,
      payload: data
    });
  } catch (err) {
    setRecipeError(err.message);
  }
};

// Get more details on selected recipe from API
export const getCurrentRecipe = recipeID => async dispatch => {
  try {
    const res = await axios.get(
      `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_RECIPE_API_KEY}&rId=${recipeID}`
    );
    const data = res.data.recipe;
    dispatch({
      type: GET_CURRENT_RECIPE,
      payload: data
    });
  } catch (err) {
    setRecipeError(err.message);
  }
};

// Clear current recipe
export const clearCurrentRecipe = () => {
  return {
    type: CLEAR_CURRENT_RECIPE
  };
};

// Like recipe
export const likeRecipe = recipe => {
  return {
    type: LIKE_RECIPE,
    payload: recipe
  };
};

// Unlike recipe
export const unlikeRecipe = recipeID => {
  return {
    type: UNLIKE_RECIPE,
    payload: recipeID
  };
};

// Recipe error
export const setRecipeError = msg => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_RECIPE_ERROR,
    payload: { id, msg }
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_RECIPE_ERROR,
      payload: id
    });
  });
};

// Set loading spinner
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// Set search input focus
export const setSearchFocus = () => {
  return {
    type: SET_SEARCH_FOCUS
  };
};
