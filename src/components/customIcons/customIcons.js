import React from 'react';

import sprite from '../../assets/ui-iconsprite.svg';
import './customIcons.scss';

const Icons = props => (
  <svg className={`${props.type} ${props.name}`}>
    <use xlinkHref={`${sprite}#${props.name}`}></use>
  </svg>
);

export default Icons;
