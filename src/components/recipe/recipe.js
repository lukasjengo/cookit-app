import React from 'react';
import axios from 'axios';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeItem: null
    };
  }

  async componentDidMount() {
    const recipeItem = await this.getRecipe(this.props.match.params.recipeID);
    this.setState({ recipeItem });
  }

  getRecipe = async recipeID => {
    try {
      const apiKey = '1a726b3b3b82809c3aac1c36caad5ad4';
      const recipe = await axios.get(
        `https://www.food2fork.com/api/get?key=${apiKey}&rId=${recipeID}`
      );
      console.log(recipe.data.recipe);
      return recipe.data.recipe;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <p>Iam recipe</p>
      </div>
    );
  }
}

export default Recipe;
