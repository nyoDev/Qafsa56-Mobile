import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 14.5h2.293a2 2 0 011.414.586l2.293 2.293V6.62L9.207 8.914a2 2 0 01-1.414.586H5.5v5zm2.646-6.646A.5.5 0 017.793 8H4.5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h3.293a.5.5 0 01.353.146l4 4a.5.5 0 00.854-.353V4.207a.5.5 0 00-.854-.353l-4 4z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
