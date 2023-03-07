import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.5 7A.75.75 0 008 7v10a.75.75 0 001.5 0v-4.571l5.675 4.864a.5.5 0 00.825-.38V7.087a.5.5 0 00-.825-.38L9.5 11.571V7z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
