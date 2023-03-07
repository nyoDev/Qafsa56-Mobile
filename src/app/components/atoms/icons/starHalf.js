import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.541 8.756a.532.532 0 00.389-.286l2.594-5.177a.533.533 0 01.952 0L15.07 8.47c.076.152.22.258.389.286l5.096.848a.53.53 0 01.289.898l-3.866 3.857a.53.53 0 00-.15.456l.86 5.572a.532.532 0 01-.78.547l-4.653-2.532a.533.533 0 00-.51 0l-4.652 2.532a.532.532 0 01-.78-.547l.859-5.572a.53.53 0 00-.15-.456l-3.866-3.857a.53.53 0 01.289-.898l5.096-.848zm6.673 1.466l3.26.542-2.55 2.544a2.013 2.013 0 00-.568 1.733l.565 3.664-2.953-1.607a2.025 2.025 0 00-.968-.246V5.667l1.738 3.468c.29.577.838.98 1.476 1.087z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
