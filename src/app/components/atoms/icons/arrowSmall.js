import React from 'react';
import ArrowSmallDown from './arrowSmallDown';
import ArrowSmallUp from './arrowSmallUp';
import ArrowSmallLeft from './arrowSmallLeft';
import ArrowSmallRight from './arrowSmallRight';

const directions = {
  up: ArrowSmallUp,
  down: ArrowSmallDown,
  left: ArrowSmallLeft,
  right: ArrowSmallRight,
};

const SvgComponent = ({direction = 'up', ...rest}) => {
  const Icon = directions[direction];
  return <Icon {...rest} />;
};
export default SvgComponent;
