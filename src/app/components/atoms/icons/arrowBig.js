import React from 'react';
import ArrowBigDown from './arrowBigDown';
import ArrowBigUp from './arrowBigUp';
import ArrowBigLeft from './arrowBigLeft';
import ArrowBigRight from './arrowBigRight';

const directions = {
  up: ArrowBigUp,
  down: ArrowBigDown,
  left: ArrowBigLeft,
  right: ArrowBigRight,
};

const SvgComponent = ({direction = 'up', ...rest}) => {
  const Icon = directions[direction];
  return <Icon {...rest} />;
};
export default SvgComponent;
