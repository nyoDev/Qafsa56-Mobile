import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M13.5 17a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5zm2-.5h8a.5.5 0 01.5.5v14a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
