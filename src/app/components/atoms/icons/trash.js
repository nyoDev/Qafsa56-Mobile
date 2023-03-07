import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9 11.25a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5zM14.25 10.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.126 6a4.002 4.002 0 017.748 0h3.376a.75.75 0 010 1.5H19V18a3 3 0 01-3 3H8a3 3 0 01-3-3V7.5h-.25a.75.75 0 010-1.5h3.376zM12 4.5A2.5 2.5 0 0114.292 6H9.708A2.5 2.5 0 0112 4.5zm-5.5 3h11V18a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 18V7.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
