import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8.93 8.47a.532.532 0 01-.389.286l-5.096.848a.53.53 0 00-.289.898l3.866 3.857a.53.53 0 01.15.456l-.86 5.572a.532.532 0 00.78.547l4.653-2.532a.533.533 0 01.51 0l4.652 2.532a.532.532 0 00.78-.547l-.859-5.572a.53.53 0 01.15-.456l3.866-3.857a.53.53 0 00-.289-.898l-5.096-.848a.532.532 0 01-.389-.286l-2.594-5.177a.533.533 0 00-.952 0L8.93 8.47z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
