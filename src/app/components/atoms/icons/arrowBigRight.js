import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.326 12.785H5.761A.773.773 0 015 12c0-.433.34-.785.761-.785h10.566l-4.71-4.889a.795.795 0 010-1.096.738.738 0 011.07 0l6.166 6.401a.535.535 0 010 .738l-6.166 6.401a.738.738 0 01-1.07 0 .795.795 0 010-1.096l4.71-4.889z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
