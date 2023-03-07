import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 10.5v6h-.75a.75.75 0 000 1.5H9a3 3 0 106 0h4.25a.75.75 0 000-1.5h-.75v-6a6.5 6.5 0 10-13 0zm11.5 0a5 5 0 00-10 0v6h10v-6zM13.5 18h-3a1.5 1.5 0 003 0z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
