import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// PAGES
import HomePage from './pages/homepage/homepage';
import About from './pages/about/about';
import LikedRecipes from './pages/likedRecipes/likedRecipes';
import Recipes from './pages/recipes/recipes';
import NotFound from './pages/notFound/notFound';

// LAYOUT
import Navbar from './layout/navbar/navbar';
import Alert from './layout/alert/alert';

const App = ({ searchRecipeList, likedRecipes }) => (
  <div className='App'>
    <Navbar />
    <Alert />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={About} />
      <Route
        path='/liked-recipes'
        render={props =>
          likedRecipes.length !== 0 ? (
            <LikedRecipes {...props} />
          ) : (
            <Redirect to='/' />
          )
        }
      />
      <Route
        path='/recipes'
        render={props =>
          searchRecipeList.length !== 0 ? (
            <Recipes {...props} />
          ) : (
            <Redirect to='/' />
          )
        }
      />
      <Route component={NotFound} />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList,
  likedRecipes: state.recipes.likedRecipes
});

export default connect(mapStateToProps)(App);
