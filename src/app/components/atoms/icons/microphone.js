import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a3 3 0 00-3 3v5a3 3 0 106 0V7a3 3 0 00-3-3zm1.5 8V7a1.5 1.5 0 00-3 0v5a1.5 1.5 0 003 0z"
        fill={props.fill || '#000'}
      />
      <Path
        d="M11 17.917A6.002 6.002 0 016 12a.75.75 0 011.5 0 4.5 4.5 0 109 0 .75.75 0 011.5 0 6.002 6.002 0 01-5 5.917V19a1 1 0 11-2 0v-1.083z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
