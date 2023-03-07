import React from 'react';
import CircleArrowDown from './circleArrowDown';
import CircleArrowUp from './circleArrowUp';
import CircleArrowLeft from './arrowBigLeft';
import CircleArrowRight from './circleArrowRight';

const directions = {
  up: CircleArrowUp,
  down: CircleArrowDown,
  left: CircleArrowLeft,
  right: CircleArrowRight,
};

const SvgComponent = ({direction = 'up', ...rest}) => {
  const Icon = directions[direction];
  return <Icon {...rest} />;
};
export default SvgComponent;
