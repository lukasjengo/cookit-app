import React from 'react';

const About = () => (
  <div className='about-page'>
    <h1 className='heading-tertiary mb-3'>
      About <span className='navbar__logo--text'>COOKIT</span>
    </h1>
    <p className='paragraph mb-3'>
      Cookit is a single page demo app created with React + Redux that lets you
      find recipes and save them for later reference. Surprise yourself by
      cooking something you have never cooked before.
    </p>
    <p className='paragraph mb-3'>
      Created by{' '}
      <a
        href='https://github.com/lukasjengo'
        target='_blank'
        rel='noopener noreferrer'
      >
        lukasjengo
      </a>
    </p>
    <p className='paragraph'>
      API credits go to{' '}
      <a
        href='https://www.food2fork.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Food2Fork
      </a>
    </p>
  </div>
);

export default About;
