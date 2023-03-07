import React from 'react';
import {Text} from 'react-native';

import Fonts from 'theme/fonts';
import Colors from 'theme/colors';

const TextComponent = ({children, type, color, textStyle, center, ...rest}) => (
  <Text
    style={[
      {...Fonts[type], color: Colors[color]},
      textStyle,
      typeof color === 'string' && {color},
      center && {textAlign: 'center'},
    ]}
    {...rest}>
    {children}
  </Text>
);

TextComponent.defaultProps = {
  type: 'textRegular',
  color: 'black',
};

export default TextComponent;
