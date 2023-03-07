import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.99 9.004a.712.712 0 011.014-1.001L12 10.993l2.996-2.99a.712.712 0 011.014 1L13.094 12l2.916 2.996a.712.712 0 01-1.014 1.001L12 13.007l-2.996 2.99a.712.712 0 01-1.014-1L10.906 12 7.99 9.004z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-1.5 0a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
