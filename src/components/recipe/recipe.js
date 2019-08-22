import React from 'react';
import { connect } from 'react-redux';

import './recipe.scss';

const Recipe = ({ currentRecipe }) => {
  return <div className='recipongo'>I am a recipe</div>;
};

const mapStateToProps = state => ({
  currentRecipe: state.recipes.currentRecipe
});

export default connect(mapStateToProps)(Recipe);
