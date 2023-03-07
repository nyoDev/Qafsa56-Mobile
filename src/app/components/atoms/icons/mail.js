import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm13.44-.5H6.56l4.556 4.556a1.25 1.25 0 001.768 0L17.439 7.5zM5.5 8.56V16a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V8.56l-4.555 4.556a2.75 2.75 0 01-3.89 0L5.5 8.561z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
