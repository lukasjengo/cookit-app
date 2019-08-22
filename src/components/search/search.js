import React from 'react';

import './search.scss';

const Search = ({ handleChange, handleSubmit, searchInput }) => (
  <React.Fragment>
    <form className='search' onSubmit={handleSubmit}>
      <input
        placeholder='Search for incredible recipes'
        type='search'
        className='search__input'
        onChange={handleChange}
        value={searchInput}
      />
      <button className='search__btn'>Search</button>
    </form>
  </React.Fragment>
);

export default Search;
