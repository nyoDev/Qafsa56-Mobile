import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.5 13.5c0 .444-.193.843-.5 1.118V16a1 1 0 11-2 0v-1.382a1.5 1.5 0 112.5-1.118z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8v1h1a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a2 2 0 012-2h1V8a4 4 0 118 0zm-4-2.5A2.5 2.5 0 0114.5 8v1h-5V8A2.5 2.5 0 0112 5.5zm-5 5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5H7z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
