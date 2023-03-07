import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.146 10.854a.5.5 0 00-.353-.854H15V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6.207a.5.5 0 00-.353.854l5.792 5.792a.5.5 0 00.707 0l5.793-5.792zM9 11.5a1.5 1.5 0 001.5-1.5V5.5h3V10a1.5 1.5 0 001.5 1.5h.379L12 14.879 8.621 11.5H9z"
        fill={props.fill || '#000'}
      />
      <Path
        d="M5.75 18.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H5.75z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
