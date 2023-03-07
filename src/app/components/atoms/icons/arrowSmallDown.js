import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.854 9.854l4.792 4.792a.5.5 0 00.707 0l4.793-4.792A.5.5 0 0016.793 9H7.207a.5.5 0 00-.353.854z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
