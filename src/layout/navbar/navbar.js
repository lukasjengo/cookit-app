import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Search from '../../components/search/search';

import { ReactComponent as Logo } from '../../assets/muncher-icon.svg';
import HamburgerIcon from '../hamburgerIcon/hamburgerIcon';

const Navbar = ({ likedRecipes }) => {
  const [toggleMenu, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggleMenu);
  };

  return (
    <nav className='navbar'>
      <Link to='/'>
        <div className='navbar__logo'>
          <Logo className='navbar__logo--img' />{' '}
          <span className='navbar__logo--text u-hide-phone'>COOKIT</span>
        </div>
      </Link>
      <Search />
      <ul
        className={
          toggleMenu ? 'navbar__nav navbar__nav--toggle' : 'navbar__nav'
        }
      >
        <li className='navbar__nav--item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='navbar__nav--item'>
          <Link to='/about'>About</Link>
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
      <HamburgerIcon toggleMenu={toggleMenu} onToggle={onToggle} />
    </nav>
  );
};

const mapStateToProps = state => ({
  likedRecipes: state.recipes.likedRecipes
});

export default connect(mapStateToProps)(Navbar);
