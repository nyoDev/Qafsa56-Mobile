import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.918 5.236C10.044 4.537 8.997 4 7.95 4 5.16 4 3 6.072 3 8.749c0 3.691 3.7 7.027 6.798 9.681.522.448 1.028.882 1.496 1.301.4.359 1.012.359 1.412 0 .468-.42.974-.853 1.497-1.3C17.3 15.775 21 12.605 21 8.748 21 6.072 18.84 4 16.05 4c-1.047 0-2.094.537-2.968 1.236-.403.322-.77.68-1.082 1.034a8.722 8.722 0 00-1.082-1.034z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
