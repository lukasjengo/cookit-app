import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios';

import HomePage from './pages/homepage/homepage';
import About from './pages/about/about';
import SignIn from './pages/signin/signin';
import Recipes from './pages/recipes/recipes';

import './App.scss';
import Navbar from './layout/navbar/navbar';

const App = props => {
  const [searchInput, setSearchInput] = useState('');
  const [recipes, setRecipes] = useState([]);

  // FOR TESTING
  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    setRecipes(recipes);
  }, []);

  const getRecipes = async query => {
    try {
      const res = await axios.get(
        `https://www.food2fork.com/api/search?key=${
          process.env.REACT_APP_RECIPE_API_KEY
        }&q=${query}`
      );
      setRecipes(res.data.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!localStorage.getItem('recipes')) {
      getRecipes(searchInput);
      setSearchInput('');
      // LS
      localStorage.setItem('recipes', JSON.stringify(recipes));
    } else {
      const recipes = JSON.parse(localStorage.getItem('recipes'));
      setRecipes(recipes);
    }
  };

  return (
    <Router>
      <div className='App'>
        <Navbar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchInput={searchInput}
        />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/signin' component={SignIn} />
          <Route
            path='/recipes'
            render={props => <Recipes {...props} recipes={recipes} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
