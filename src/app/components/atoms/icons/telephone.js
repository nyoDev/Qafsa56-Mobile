import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.062 7.152c-.326 2.706.586 5.49 3.938 8.846 4.515 4.52 8.482 4.008 8.832 3.963l.02-.003c.35-.042.687-.126 1.029-.258.367-.144.71-.339 1.008-.572l.72-.678c.508-.51.523-1.325.033-1.818-.008-.008-1.979-1.983-2.47-2.472-.463-.463-1.214-.476-1.725-.049a1.592 1.592 0 01-.195.146l-.293.177a1 1 0 01-1.222-.15l-4.02-4.014a1 1 0 01-.138-1.243l.18-.285c.04-.062.087-.119.135-.175.434-.512.423-1.27-.042-1.736L7.382 4.36c-.49-.491-1.305-.477-1.815.034l-.677.72a4.03 4.03 0 00-.573 1.012c-.134.353-.217.69-.255 1.027zm1.655-.487c-.081.215-.14.438-.166.667-.255 2.12.379 4.47 3.51 7.606 2.127 2.129 4.062 2.987 5.414 3.333 1.25.32 2.061.218 2.199.198a2.673 2.673 0 001.242-.486l.493-.463-2.141-2.144c-.067.051-.15.11-.242.166l-.292.176a2.5 2.5 0 01-3.057-.372l-4.02-4.015a2.5 2.5 0 01-.345-3.106l.18-.285c.049-.077.1-.146.144-.204l-2.14-2.142-.46.49a2.554 2.554 0 00-.32.58z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
