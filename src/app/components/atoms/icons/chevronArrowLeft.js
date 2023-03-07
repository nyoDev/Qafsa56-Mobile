import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.444 11.648a.5.5 0 000 .704l5.036 5.07a.743.743 0 11-1.055 1.047L8.35 12.352a.5.5 0 010-.704l6.075-6.117A.743.743 0 1115.48 6.58l-5.036 5.069z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
