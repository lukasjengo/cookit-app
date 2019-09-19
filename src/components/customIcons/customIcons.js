import React from 'react';

import sprite from '../../assets/ui-iconsprite.svg';

const Icons = props => (
  <svg className={`${props.type} ${props.name}`}>
    <use xlinkHref={`${sprite}#${props.name}`}></use>
  </svg>
);

export default Icons;
