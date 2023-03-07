import React from 'react';
import ChevronArrowDown from './chevronArrowDown';
import ChevronArrowUp from './chevronArrowUp';
import ChevronArrowLeft from './chevronArrowLeft';
import ChevronArrowRight from './chevronArrowRight';

const directions = {
  up: ChevronArrowUp,
  down: ChevronArrowDown,
  left: ChevronArrowLeft,
  right: ChevronArrowRight,
};

const SvgComponent = ({direction = 'up', ...rest}) => {
  const Icon = directions[direction];
  return <Icon {...rest} />;
};
export default SvgComponent;
