import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M14.5 11a1 1 0 100 2 1 1 0 000-2z" fill={props.fill || '#000'} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 16V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2zm-2-8.5H6a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-1H14a3 3 0 110-6h4.5V8a.5.5 0 00-.5-.5zm-4 3h4.5v3H14a1.5 1.5 0 010-3z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
