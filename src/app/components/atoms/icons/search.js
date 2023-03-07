import React from 'react';
import {Svg, Path} from 'react-native-svg';

const Search = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3911 15.4518C13.1902 16.4202 11.6628 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.6628 16.4202 13.1902 15.4518 14.3911L19.7803 18.7197C20.0732 19.0126 20.0732 19.4874 19.7803 19.7803C19.4874 20.0732 19.0126 20.0732 18.7197 19.7803L14.3911 15.4518ZM15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z"
      fill={props.fill || '#000'}
    />
  </Svg>
);

export default Search;
