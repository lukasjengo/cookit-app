import {
  SEARCH_RECIPES,
  GET_CURRENT_RECIPE,
  SET_LOADING,
  RECIPE_ERROR
} from './recipeTypes';

const initialState = {
  searchRecipeList: null,
  currentRecipe: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RECIPES:
      return {
        ...state,
        searchRecipeList: action.payload,
        loading: false
      };
    case GET_CURRENT_RECIPE:
      return {
        ...state,
        currentRecipe: action.payload,
        loading: false
      };
    case RECIPE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
