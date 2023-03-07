import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.027 12.575a.738.738 0 111.044-1.045l2.075 2.1a.5.5 0 00.71 0l5.072-5.101a.74.74 0 111.046 1.047l-6.123 6.076a.5.5 0 01-.703 0l-3.12-3.077z"
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

SvgComponent.defaultProps = {
  fill: '#000',
};

export default SvgComponent;
