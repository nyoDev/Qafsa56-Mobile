import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9 10a1 1 0 100-2 1 1 0 000 2zM16 9a1 1 0 11-2 0 1 1 0 012 0zM8.5 14.25a.75.75 0 000 1.5h7a.75.75 0 100-1.5h-7z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-1.5 0a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
