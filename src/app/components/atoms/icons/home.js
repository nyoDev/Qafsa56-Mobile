import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z" />
  </Svg>
);

export default SvgComponent;
