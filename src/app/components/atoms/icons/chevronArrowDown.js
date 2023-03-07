import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.647 13.556a.5.5 0 00.705 0l5.069-5.036a.743.743 0 111.048 1.055l-6.117 6.075a.5.5 0 01-.705 0L5.531 9.575A.743.743 0 116.579 8.52l5.068 5.036z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
