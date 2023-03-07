import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.022 11.529a.738.738 0 00.005 1.046l3.12 3.078a.5.5 0 00.704-.001l6.123-6.076a.74.74 0 10-1.046-1.047l-5.072 5.101a.5.5 0 01-.71 0l-2.075-2.1a.738.738 0 00-1.049-.001z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7zm4-2.5h10A2.5 2.5 0 0119.5 7v10a2.5 2.5 0 01-2.5 2.5H7A2.5 2.5 0 014.5 17V7A2.5 2.5 0 017 4.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
