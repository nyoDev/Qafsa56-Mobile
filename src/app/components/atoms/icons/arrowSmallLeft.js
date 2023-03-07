import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M14.146 6.854l-4.792 4.792a.5.5 0 000 .708l4.792 4.793a.5.5 0 00.854-.354V7.207a.5.5 0 00-.854-.353z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
