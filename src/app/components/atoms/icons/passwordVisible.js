import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.147 11.233a1.558 1.558 0 00.094 1.49C5.538 14.83 8.364 18 12 18s6.462-3.17 7.759-5.277c.28-.454.322-1.01.094-1.49C18.856 9.126 16.333 6 12 6c-4.332 0-6.856 3.126-7.853 5.233zm1.389.63C6.416 10.006 8.526 7.5 12 7.5c3.473 0 5.584 2.505 6.464 4.364a.05.05 0 01.004.026.13.13 0 01-.02.059c-.582.944-1.504 2.118-2.659 3.04C14.633 15.91 13.35 16.5 12 16.5c-1.35 0-2.633-.589-3.79-1.511-1.154-.922-2.076-2.096-2.658-3.04a.131.131 0 01-.02-.06.05.05 0 01.004-.025z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
