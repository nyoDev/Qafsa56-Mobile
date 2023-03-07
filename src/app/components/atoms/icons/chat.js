import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 11.5a1 1 0 100-2 1 1 0 000 2zM17 10.5a1 1 0 11-2 0 1 1 0 012 0zM8 11.5a1 1 0 100-2 1 1 0 000 2z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4a4 4 0 00-4 4v5a4 4 0 004 4h1.854l2.452 2.685a.922.922 0 001.388 0L15.146 17H17a4 4 0 004-4V8a4 4 0 00-4-4H7zm5 14.22L9.516 15.5H7A2.5 2.5 0 014.5 13V8A2.5 2.5 0 017 5.5h10A2.5 2.5 0 0119.5 8v5a2.5 2.5 0 01-2.5 2.5h-2.516L12 18.22z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
