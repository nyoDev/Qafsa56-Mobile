import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.75 5a.75.75 0 010 1.5H5.5v3.25a.75.75 0 01-1.5 0v-3.5C4 5.56 4.56 5 5.25 5h4.5zM14.25 5a.75.75 0 000 1.5h4.25v3.25a.75.75 0 001.5 0v-3.5C20 5.56 19.44 5 18.75 5h-4.5zM10.5 18.25a.75.75 0 01-.75.75h-4.5C4.56 19 4 18.44 4 17.75v-3.5a.75.75 0 011.5 0v3.25h4.25a.75.75 0 01.75.75zM14.25 19a.75.75 0 010-1.5h4.25v-3.25a.75.75 0 011.5 0v3.5c0 .69-.56 1.25-1.25 1.25h-4.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
