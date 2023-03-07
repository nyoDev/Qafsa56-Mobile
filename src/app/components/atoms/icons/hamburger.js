import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4 6.75A.75.75 0 014.75 6h14.5a.75.75 0 010 1.5H4.75A.75.75 0 014 6.75zM4 12a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H4.75A.75.75 0 014 12zM4.75 16.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H4.75z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
