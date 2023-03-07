import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 18a.75.75 0 110-1.5.75.75 0 010 1.5zM9.75 9.75c0-.38.12-.967.459-1.437.31-.432.835-.813 1.791-.813s1.48.381 1.791.813c.339.47.459 1.057.459 1.437 0 .553-.353.827-1.2 1.463-.762.57-1.8 1.394-1.8 3.037a.75.75 0 001.5 0c0-.857.462-1.284 1.2-1.838l.155-.114c.664-.488 1.645-1.21 1.645-2.548a4.1 4.1 0 00-.741-2.313C14.419 6.619 13.444 6 12 6s-2.42.619-3.009 1.437A4.1 4.1 0 008.25 9.75a.75.75 0 001.5 0z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-1.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
