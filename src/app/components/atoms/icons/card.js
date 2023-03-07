import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8 13.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5H8z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8zm14-8.5H6a.5.5 0 00-.5.5v1.25h13V8a.5.5 0 00-.5-.5zm.5 8.5v-5.25h-13V16a.5.5 0 00.5.5h12a.5.5 0 00.5-.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
