import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../../components/search/search';

import { ReactComponent as Logo } from '../../assets/muncher-icon.svg';

import './navbar.scss';

const Navbar = ({ handleChange, handleSubmit, searchInput }) => (
  <nav className='navbar'>
    <div className='navbar__logo'>
      <Logo className='navbar__logo--img' />{' '}
      <span className='navbar__logo--text'>Muncher</span>
    </div>
    <Search
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      searchInput={searchInput}
    />
    <ul className='navbar__nav'>
      <li className='navbar__nav--item'>
        <Link to='/'>Home</Link>
      </li>
      <li className='navbar__nav--item'>
        <Link to='/about'>About</Link>
      </li>
      <li className='navbar__nav--item'>
        <Link to='/signin'>Sign in</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
