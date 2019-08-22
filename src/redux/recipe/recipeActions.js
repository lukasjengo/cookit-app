import axios from 'axios';
import {
  SEARCH_RECIPES,
  GET_CURRENT_RECIPE,
  SET_LOADING,
  RECIPE_ERROR
} from './recipeTypes';

// Search API for recipes
export const searchRecipes = searchQuery => async dispatch => {
  try {
    const res = await axios.get(
      `https://www.food2fork.com/api/search?key=${
        process.env.REACT_APP_RECIPE_API_KEY
      }&q=${searchQuery}`
    );
    const data = res.data.recipes;
    dispatch({
      type: SEARCH_RECIPES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: err.message
    });
  }
};

// Get more details on selected recipe from API
export const getCurrentRecipe = recipeID => async dispatch => {
  try {
    const res = await axios.get(
      `https://www.food2fork.com/api/get?key=${
        process.env.REACT_APP_RECIPE_API_KEY
      }&rId=${recipeID}`
    );
    const data = res.data.recipe;
    dispatch({
      type: GET_CURRENT_RECIPE,
      payload: data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: RECIPE_ERROR,
      payload: err.message
    });
  }
};

// Set loading spinner
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
