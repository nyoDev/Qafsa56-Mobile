import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.854 17.146l4.792-4.793a.5.5 0 000-.707L9.854 6.854A.5.5 0 009 7.207v9.586a.5.5 0 00.854.353z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
