import React from 'react';

const HamburgerIcon = ({ onToggle, toggleMenu }) => (
  <button className='navbar__button' onClick={onToggle}>
    <span
      className={
        toggleMenu
          ? 'navbar__icon navbar__icon--rotated-1'
          : 'navbar__icon navbar__icon--1'
      }
    >
      &nbsp;
    </span>
    <span
      className={
        toggleMenu
          ? 'navbar__icon navbar__icon--rotated-2'
          : 'navbar__icon navbar__icon--2'
      }
    >
      &nbsp;
    </span>
    <span
      className={
        toggleMenu
          ? 'navbar__icon navbar__icon--rotated-3'
          : 'navbar__icon navbar__icon--3'
      }
    >
      &nbsp;
    </span>
  </button>
);

export default HamburgerIcon;
