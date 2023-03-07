import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.298 7.823L11.5 6.621v2.404l1.5 1.5V4.207a.5.5 0 00-.854-.353L9.237 6.763l1.061 1.06zM4.5 8h1.025l1.5 1.5H5.5v5h2.293a2 2 0 011.414.586l2.293 2.293v-3.404l1.5 1.5v4.318a.5.5 0 01-.854.354l-4-4A.5.5 0 007.793 16H4.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5zM5.53 4.47a.75.75 0 00-1.06 1.06l14 14a.75.75 0 101.06-1.06l-14-14z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
