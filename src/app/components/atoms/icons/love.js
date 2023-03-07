import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8.53l-1.128-1.28A6.746 6.746 0 009.39 5.983c-.554-.34-1.045-.493-1.44-.493-2.01 0-3.45 1.454-3.45 3.26 0 1.69.952 3.357 2.54 5.09 1.124 1.223 2.403 2.32 3.663 3.399.437.374.872.747 1.297 1.122.425-.375.86-.748 1.297-1.122 1.26-1.08 2.54-2.175 3.662-3.4 1.589-1.732 2.541-3.4 2.541-5.089 0-1.806-1.44-3.26-3.45-3.26-.395 0-.886.153-1.44.493a6.746 6.746 0 00-1.482 1.269L12 8.53zm-1.082-3.294C10.044 4.537 8.997 4 7.95 4 5.16 4 3 6.072 3 8.749c0 3.691 3.7 7.027 6.798 9.681.522.448 1.028.882 1.496 1.301.4.359 1.012.359 1.412 0 .468-.42.974-.853 1.497-1.3C17.3 15.775 21 12.605 21 8.748 21 6.072 18.84 4 16.05 4c-1.047 0-2.094.537-2.968 1.236-.403.322-.77.68-1.082 1.034a8.722 8.722 0 00-1.082-1.034z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
