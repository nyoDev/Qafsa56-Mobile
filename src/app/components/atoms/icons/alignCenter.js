import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20 5a.75.75 0 00-.75-.75H4.75a.75.75 0 000 1.5h14.5A.75.75 0 0020 5zM20 12a.75.75 0 00-.75-.75H4.75a.75.75 0 000 1.5h14.5A.75.75 0 0020 12zM19.25 18.25a.75.75 0 010 1.5H4.75a.75.75 0 010-1.5h14.5zM17 15.5a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5a.75.75 0 00.75-.75zM16.25 7.75a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h8.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
