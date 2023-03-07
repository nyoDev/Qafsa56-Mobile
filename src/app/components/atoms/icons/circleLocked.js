import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.253 5.807A7.5 7.5 0 016.193 7.253l10.554 10.554zm1.06-1.06L7.253 6.193a7.5 7.5 0 0110.554 10.554z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
