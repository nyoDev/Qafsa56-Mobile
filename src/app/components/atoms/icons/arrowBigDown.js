import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11.215 16.326V5.761c0-.42.351-.761.785-.761.433 0 .785.34.785.761v10.566l4.889-4.71a.795.795 0 011.096 0 .738.738 0 010 1.07l-6.401 6.166a.535.535 0 01-.738 0L5.23 12.687a.738.738 0 010-1.07.795.795 0 011.096 0l4.889 4.71z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
