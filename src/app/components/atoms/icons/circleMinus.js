import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.25 12a.75.75 0 01-.75.75h-9a.75.75 0 010-1.5h9a.75.75 0 01.75.75z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-1.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
