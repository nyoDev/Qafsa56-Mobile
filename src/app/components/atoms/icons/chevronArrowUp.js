import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.352 10.444a.5.5 0 00-.705 0L6.58 15.48a.743.743 0 11-1.048-1.055l6.116-6.075a.5.5 0 01.705 0l6.117 6.075a.743.743 0 01-1.048 1.055l-5.069-5.036z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
