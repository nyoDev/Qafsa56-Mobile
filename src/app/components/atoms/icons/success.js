import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M5.522 11.529a.74.74 0 00.005 1.046l4.12 4.076a.5.5 0 00.704 0l8.123-8.074a.741.741 0 10-1.047-1.049l-7.072 7.104a.5.5 0 01-.71-.001l-3.073-3.102a.74.74 0 00-1.05 0z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
