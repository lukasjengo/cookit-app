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

const initialState = {
  searchRecipeList: [],
  currentRecipe: null,
  likedRecipes: [],
  loading: false,
  searchFocus: false,
  errors: []
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
    case CLEAR_CURRENT_RECIPE:
      return {
        ...state,
        currentRecipe: null
      };
    case LIKE_RECIPE:
      return {
        ...state,
        likedRecipes: [action.payload, ...state.likedRecipes]
      };
    case UNLIKE_RECIPE:
      return {
        ...state,
        likedRecipes: state.likedRecipes.filter(
          recipe => action.payload !== recipe.recipe_id
        )
      };
    case SET_RECIPE_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload],
        loading: false
      };
    case REMOVE_RECIPE_ERROR:
      return {
        ...state,
        errors: state.errors.filter(error => error.id !== action.payload)
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_SEARCH_FOCUS:
      return {
        ...state,
        searchFocus: !state.searchFocus
      };
    default:
      return state;
  }
};
