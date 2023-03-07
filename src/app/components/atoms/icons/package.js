import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10 12.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8a2 2 0 001 1.732V18a2 2 0 002 2h10a2 2 0 002-2V9.732A2 2 0 0020 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2zm14-2.5H6a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5zM6.5 18v-8h11v8a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
