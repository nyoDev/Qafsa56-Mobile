import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M5.322 4.227a.774.774 0 10-1.095 1.095l14.451 14.451a.774.774 0 101.095-1.095L5.322 4.227zM17 10.5v3.318l1.5 1.5V10.5A6.5 6.5 0 008.322 5.14l1.085 1.085A5 5 0 0117 10.5z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 10.5c0-.55.07-1.091.204-1.614l1.306 1.306A5 5 0 007 10.5v6h6.318l1.677 1.677A3 3 0 019 18H4.75a.75.75 0 010-1.5h.75v-6zm5 7.5a1.5 1.5 0 003 0h-3z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
