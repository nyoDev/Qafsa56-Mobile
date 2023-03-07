import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.232 18.974a.762.762 0 01-.504-1.017l4.943-12.479a.75.75 0 01.893-.452.762.762 0 01.504 1.017l-4.942 12.479a.75.75 0 01-.894.452zm10.323-6.59a.544.544 0 000-.767l-3.32-3.344a.808.808 0 010-1.14.813.813 0 011.154 0l4.453 4.484c.21.212.21.554 0 .766l-4.453 4.483a.813.813 0 01-1.153 0 .808.808 0 01-.001-1.14l3.32-3.343zm-15.11 0a.544.544 0 010-.767l3.32-3.344a.808.808 0 000-1.14.814.814 0 00-1.154 0l-4.453 4.484a.544.544 0 000 .766l4.453 4.483c.318.32.836.32 1.153 0a.808.808 0 00.001-1.14l-3.32-3.343z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
