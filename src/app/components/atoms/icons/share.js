import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.5 9a2.5 2.5 0 10-2.469-2.104l-6.733 3.367a2.5 2.5 0 100 3.475l6.733 3.366a2.5 2.5 0 10.671-1.341L8.97 12.396a2.52 2.52 0 000-.792l6.733-3.367c.455.47 1.092.763 1.798.763z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
