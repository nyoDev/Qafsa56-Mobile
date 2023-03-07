import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.8 17.4l6.667-5a.5.5 0 000-.8L9.8 6.6A.5.5 0 009 7v10a.5.5 0 00.8.4z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
