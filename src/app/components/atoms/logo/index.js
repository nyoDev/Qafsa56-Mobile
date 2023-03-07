import * as React from 'react';
import {Image} from 'react-native';
import {images} from 'images';

function SvgComponent(props) {
  return <Image source={images.logo} {...props} />;
}

export default SvgComponent;
