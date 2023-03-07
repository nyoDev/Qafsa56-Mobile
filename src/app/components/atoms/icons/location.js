import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 10.68c0-1.35-.562-2.66-1.586-3.638C14.887 6.062 13.481 5.5 12 5.5c-1.48 0-2.887.562-3.914 1.542C7.062 8.019 6.5 9.33 6.5 10.68c0 1.875 1.156 3.697 2.676 5.242A19.062 19.062 0 0012 18.256a19.064 19.064 0 002.824-2.333c1.52-1.545 2.676-3.367 2.676-5.242zm-5.612 9.288C10.989 19.425 5 15.625 5 10.68c0-1.772.737-3.471 2.05-4.724C8.363 4.704 10.143 4 12 4c1.857 0 3.637.704 4.95 1.957C18.263 7.21 19 8.909 19 10.68c0 4.944-5.99 8.744-6.888 9.287a.21.21 0 01-.224 0z"
        fill={props.fill || '#000'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 1.5a3 3 0 100-6 3 3 0 000 6z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
