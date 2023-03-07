import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.77 4.383l-7.387 7.388a1.306 1.306 0 001.847 1.846l7.387-7.387a1.306 1.306 0 00-1.847-1.847zM4.75 16.571C4.75 15.15 5.923 14 7.375 14 8.828 14 10 15.149 10 16.571 10 18.466 8.434 20 6.5 20c-1.321 0-2.695-.669-3.5-1.714.735 0 1.75-.592 1.75-1.715z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
