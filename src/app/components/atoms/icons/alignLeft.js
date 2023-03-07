import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4 5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H4.75A.75.75 0 014 5zM4 12a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H4.75A.75.75 0 014 12zM4.75 18.25a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H4.75zM4 15.5a.75.75 0 01.75-.75H13a.75.75 0 010 1.5H4.75A.75.75 0 014 15.5zM4.75 7.75a.75.75 0 000 1.5H13a.75.75 0 000-1.5H4.75z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
