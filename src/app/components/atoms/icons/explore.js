import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.342 9.974a1 1 0 01.632-.632l5.129-1.71a1 1 0 011.264 1.265l-1.709 5.129a1 1 0 01-.632.632l-5.129 1.71a1 1 0 01-1.265-1.265l1.71-5.129zm.03 4.654l1.314-3.942 3.942-1.314-1.314 3.942-3.942 1.314z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-1.5 0a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
