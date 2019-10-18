import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/404-not-found.png';

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <img src={image} alt='page not found' />
      <h1 className='heading-tertiary'>Page not cooked yet</h1>
      <Link to='/' className='btn btn-primary'>
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
