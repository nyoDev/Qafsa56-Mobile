import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.146 14.146l-4.792-4.792a.5.5 0 00-.707 0l-4.793 4.792a.5.5 0 00.353.854h9.586a.5.5 0 00.354-.854z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
