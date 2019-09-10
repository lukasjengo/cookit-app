import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Search from '../../components/search/search';

import { ReactComponent as Logo } from '../../assets/muncher-icon.svg';

import './navbar.scss';

const Navbar = ({ likedRecipes }) => (
  <nav className='navbar'>
    <div className='navbar__logo'>
      <Logo className='navbar__logo--img' />{' '}
      <span className='navbar__logo--text'>Muncher</span>
    </div>
    <Search />
    <ul className='navbar__nav'>
      <li className='navbar__nav--item'>
        <Link to='/'>Home</Link>
      </li>
      <li className='navbar__nav--item'>
        <Link to='/about'>About</Link>
      </li>
      <li className='navbar__nav--item'>
        <Link to='/recipes'>recipes</Link>
      </li>
      {likedRecipes.length !== 0 && (
        <li className='navbar__nav--item'>
          <Link to='/liked-recipes'>Liked recipes</Link>
          <div className='counter'>
            <span className='counter__number'>{likedRecipes.length}</span>
          </div>
        </li>
      )}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  likedRecipes: state.recipes.likedRecipes
});

export default connect(mapStateToProps)(Navbar);
