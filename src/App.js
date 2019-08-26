import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// PAGES
import HomePage from './pages/homepage/homepage';
import About from './pages/about/about';
import SignIn from './pages/signin/signin';
import Recipes from './pages/recipes/recipes';

// LAYOUT
import Navbar from './layout/navbar/navbar';

import './App.scss';

const App = ({ searchRecipeList }) => (
  <div className='App'>
    <Navbar />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={About} />
      <Route exact path='/signin' component={SignIn} />
      <Route
        path='/recipes'
        render={props =>
          searchRecipeList ? <Recipes {...props} /> : <Redirect to='/' />
        }
      />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  searchRecipeList: state.recipes.searchRecipeList
});

export default connect(mapStateToProps)(App);
