import React from 'react';
import axios from 'axios';

import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      recipes: []
    };
  }

  getRecipes = async query => {
    try {
      const apiKey = '1a726b3b3b82809c3aac1c36caad5ad4';
      const recipes = await axios
        .get(`https://www.food2fork.com/api/search?key=${apiKey}&q=${query}`)
        .then(res => res.data.recipes);
      return recipes;
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const recipes = await this.getRecipes(this.state.value);
    this.setState({ recipes });
    this.setState({ value: '' });
  };

  render() {
    return (
      <React.Fragment>
        <form className='search' onSubmit={this.handleSubmit}>
          <input
            placeholder='Search for incredible recipes'
            type='search'
            className='search__input'
            onChange={this.handleChange}
          />
          <button className='search__btn'>Search</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
