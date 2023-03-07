import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.674 11.215h10.565c.42 0 .761.351.761.785 0 .433-.34.785-.761.785H7.673l4.71 4.889a.795.795 0 010 1.096.738.738 0 01-1.07 0L5.147 12.37a.535.535 0 010-.738l6.166-6.401a.738.738 0 011.07 0 .795.795 0 010 1.096l-4.71 4.889z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
