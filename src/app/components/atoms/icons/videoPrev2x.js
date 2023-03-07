import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.5 7A.75.75 0 005 7v10a.75.75 0 001.5 0v-4.571l5.675 4.864a.5.5 0 00.825-.38v-4.056l5.175 4.436a.5.5 0 00.825-.38V7.087a.5.5 0 00-.825-.38L13 11.143V7.087a.5.5 0 00-.825-.38L6.5 11.571V7z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
