import React from 'react';
import ArrowBig from './arrowBig';
import ArrowSmall from './arrowSmall';
import CircleArrow from './circleArrow';
import ChevronArrow from './chevronArrow';

const types = {
  big: ArrowBig,
  small: ArrowSmall,
  chevron: ChevronArrow,
  circle: CircleArrow,
};

const SvgComponent = ({type = 'big', ...rest}) => {
  const Icon = types[type];
  return <Icon {...rest} />;
};
export default SvgComponent;
