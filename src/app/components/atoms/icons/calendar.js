import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4a.75.75 0 01.75.75V5h4.5v-.25a.75.75 0 011.5 0V5H17a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h1.25v-.25A.75.75 0 019 4zm5.25 2.5v.75a.75.75 0 001.5 0V6.5H17a.5.5 0 01.5.5v2.25h-11V7a.5.5 0 01.5-.5h1.25v.75a.75.75 0 001.5 0V6.5h4.5zM6.5 10.75V17a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-6.25h-11z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
