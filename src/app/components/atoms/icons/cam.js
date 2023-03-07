import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5a2 2 0 012 2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012-2h4zm.5 2v1.5H18a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V9a.5.5 0 01.5-.5h3.5V7a.5.5 0 01.5-.5h4a.5.5 0 01.5.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
