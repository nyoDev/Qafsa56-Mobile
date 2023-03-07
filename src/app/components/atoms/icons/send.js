import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11 4.75a.75.75 0 01-.75.75H6a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-4.25a.75.75 0 011.5 0V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h4.25a.75.75 0 01.75.75z"
        fill={props.fill || '#000'}
      />
      <Path
        d="M13.5 4.75a.75.75 0 01.75-.75h4.5c.69 0 1.25.56 1.25 1.25v4.5a.75.75 0 01-1.5 0V6.56l-6.97 6.97a.75.75 0 11-1.06-1.06l6.97-6.97h-3.19a.75.75 0 01-.75-.75z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
