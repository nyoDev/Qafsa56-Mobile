import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10 8.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4zM9.25 12a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75zM10 14.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5a1 1 0 011-1h6.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V19a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm10.5 3.621V18.5h-9v-13h5.879L16.5 8.621z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
