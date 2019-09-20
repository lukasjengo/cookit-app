import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import recipeReducer from './recipe/recipeReducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  recipes: recipeReducer
});

export default persistReducer(persistConfig, rootReducer);
