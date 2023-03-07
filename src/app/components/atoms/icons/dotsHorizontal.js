import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
