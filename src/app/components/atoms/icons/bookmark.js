import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 17.488V6.016a.502.502 0 00-.5-.504H8c-.276 0-.5.226-.5.504v11.472l3.086-3.11a1.988 1.988 0 012.828 0l3.086 3.11zM18 6.016A2.008 2.008 0 0016 4H8c-1.105 0-2 .903-2 2.016v13.176c0 .718.862 1.078 1.366.57l4.28-4.316a.497.497 0 01.708 0l4.28 4.316c.504.508 1.366.148 1.366-.57V6.016z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
