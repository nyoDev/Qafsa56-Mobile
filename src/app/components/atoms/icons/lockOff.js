import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13 14.618a1.5 1.5 0 10-2 0V16a1 1 0 102 0v-1.382z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.028 6.538c.19.263.473.462.796.462.532 0 .92-.508.658-.97A4 4 0 008 8v1H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2H9.5V8a2.5 2.5 0 014.528-1.462zM17.5 11a.5.5 0 00-.5-.5H7a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-7z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
