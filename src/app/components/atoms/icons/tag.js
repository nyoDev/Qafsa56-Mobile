import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.484 5.979v5.116c0 .132.052.257.145.35l6.926 6.926a.495.495 0 00.7 0l5.116-5.117a.495.495 0 000-.7L11.445 5.63a.495.495 0 00-.35-.145H5.98a.495.495 0 00-.495.495zM4 11.095V5.98C4 4.886 4.886 4 5.979 4h5.116c.525 0 1.029.208 1.4.58l6.925 6.925a1.979 1.979 0 010 2.799l-5.116 5.116a1.979 1.979 0 01-2.799 0L4.58 12.495a1.979 1.979 0 01-.58-1.4z"
        fill={props.fill || '#000'}
      />
      <Path
        d="M10 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
