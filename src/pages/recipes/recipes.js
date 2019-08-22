import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Recipe from '../../components/recipe/recipe';

import './recipes.scss';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeItem: null
    };
  }

  getRecipe = async recipeID => {
    try {
      const recipe = await axios
        .get(
          `https://www.food2fork.com/api/get?key=${
            process.env.REACT_APP_RECIPE_API_KEY
          }&rId=${recipeID}`
        )
        .then(res => res.data.recipes);
      return recipe;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className='recipes-page'>
        <ul className='recipe-list'>
          {this.props.recipes.map(recipe => (
            <Link to={`/recipes/${recipe.recipe_id}`} key={recipe.recipe_id}>
              <li className='recipe-list__item'>
                <img
                  className='recipe-list__img'
                  src={recipe.image_url}
                  alt='recipe'
                />
                <h4>{recipe.title}</h4>
                <span>By {recipe.publisher}</span>
              </li>
            </Link>
          ))}
        </ul>

        <Route path={`${this.props.match.path}/:recipeID`} component={Recipe} />
      </div>
    );
  }
}

export default Recipes;

// ${recipe.title
//   .toLowerCase()
//   .split(' ')
//   .join('-')}
