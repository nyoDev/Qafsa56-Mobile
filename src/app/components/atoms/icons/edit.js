import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11.25 5.5a.75.75 0 000-1.5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5.25a.75.75 0 00-1.5 0V18a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h5.25z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.41 14.586V12a1 1 0 01.293-.707l7-7a1 1 0 011.414 0l2.586 2.586a1 1 0 010 1.414l-7 7a1 1 0 01-.707.293H9.41a1 1 0 01-1-1zm3.379-.5H9.91v-1.879l6.5-6.5 1.879 1.879-6.5 6.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
