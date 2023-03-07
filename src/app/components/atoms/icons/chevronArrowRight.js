import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.556 12.352a.5.5 0 000-.704L8.52 6.578a.743.743 0 111.055-1.047l6.075 6.117a.5.5 0 010 .704L9.575 18.47A.743.743 0 018.52 17.42l5.036-5.069z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
