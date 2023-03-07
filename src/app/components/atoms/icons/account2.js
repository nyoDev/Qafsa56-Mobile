import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.632 11.012a4 4 0 10-5.265 0 7.02 7.02 0 00-4.036 4.351 1.55 1.55 0 00.236 1.394c.282.381.597.736.941 1.06A7.972 7.972 0 0012 20a7.988 7.988 0 006.432-3.242c.297-.401.388-.92.236-1.394a7.025 7.025 0 00-4.036-4.352zM14.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2.35 6.907a1.442 1.442 0 01-.267 1.702A6.48 6.48 0 0112 18.5a6.48 6.48 0 01-4.585-1.892 1.442 1.442 0 01-.267-1.702A5.5 5.5 0 0112 12c2.1 0 3.925 1.177 4.852 2.907z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
