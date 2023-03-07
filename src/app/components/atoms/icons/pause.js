import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8 6a1 1 0 00-1 1v10a1 1 0 001 1h1a1 1 0 001-1V7a1 1 0 00-1-1H8zM15 6a1 1 0 00-1 1v10a1 1 0 001 1h1a1 1 0 001-1V7a1 1 0 00-1-1h-1z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
