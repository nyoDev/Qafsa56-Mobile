import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19.714a7.714 7.714 0 100-15.428 7.714 7.714 0 000 15.428zM12 21a9 9 0 100-18 9 9 0 000 18z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
