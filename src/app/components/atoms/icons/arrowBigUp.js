import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.785 7.674v10.565c0 .42-.351.761-.785.761a.773.773 0 01-.785-.761V7.673l-4.889 4.71a.795.795 0 01-1.096 0 .738.738 0 010-1.07l6.401-6.166a.535.535 0 01.738 0l6.401 6.166a.738.738 0 010 1.07.795.795 0 01-1.096 0l-4.889-4.71z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
