import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm1.5 0a9 9 0 11-18 0 9 9 0 0118 0zm-5.46.384l-4.72 3.933a.5.5 0 01-.82-.385V8.069a.5.5 0 01.82-.385l4.72 3.933a.5.5 0 010 .768z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
