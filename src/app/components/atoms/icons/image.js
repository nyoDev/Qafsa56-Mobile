import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 13a3 3 0 100-6 3 3 0 000 6zm0-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6zm-2-.5H6a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h5.126a9 9 0 017.374-7.374V6a.5.5 0 00-.5-.5zm.5 7.152a7.501 7.501 0 00-5.848 5.848H18a.5.5 0 00.5-.5v-5.348z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
