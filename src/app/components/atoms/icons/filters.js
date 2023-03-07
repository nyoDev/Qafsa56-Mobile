import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 4a.75.75 0 01.75.75v6.364a2.501 2.501 0 010 4.771v3.365a.75.75 0 01-1.5 0v-3.364a2.501 2.501 0 010-4.771V4.75A.75.75 0 016.5 4zm1 9.5a1 1 0 11-2 0 1 1 0 012 0zM12.75 4.75a.75.75 0 00-1.5 0v1.364a2.501 2.501 0 000 4.772v8.364a.75.75 0 001.5 0v-8.364a2.501 2.501 0 000-4.772V4.75zM13 8.5a1 1 0 11-2 0 1 1 0 012 0zM16.75 19.25v-1.364a2.501 2.501 0 010-4.771V4.75a.75.75 0 011.5 0v8.364a2.501 2.501 0 010 4.771v1.365a.75.75 0 01-1.5 0zm.75-2.75a1 1 0 100-2 1 1 0 000 2z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
