import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.352 12.558a.5.5 0 01-.704 0l-3.07-3.04a.743.743 0 00-1.045 1.057l4.115 4.076a.5.5 0 00.704 0l4.115-4.076a.743.743 0 00-1.046-1.057l-3.07 3.04z"
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
