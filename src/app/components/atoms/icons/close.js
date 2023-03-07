import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M5.52 5.531a.743.743 0 000 1.048L10.906 12 5.52 17.421a.743.743 0 101.055 1.048L12 13.007l5.425 5.462a.743.743 0 001.055-1.048L13.094 12l5.386-5.421a.743.743 0 10-1.055-1.048L12 10.993 6.575 5.531a.743.743 0 00-1.055 0z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
