import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM19 12a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
