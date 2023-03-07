import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M14.5 17a.75.75 0 001.5 0V7a.75.75 0 00-1.5 0v4.571L8.825 6.707a.5.5 0 00-.825.38v9.826a.5.5 0 00.825.38l5.675-4.864V17z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
