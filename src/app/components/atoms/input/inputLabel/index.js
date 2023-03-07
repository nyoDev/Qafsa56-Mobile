import React from 'react';
import {bool} from 'prop-types';
import {View} from 'react-native';
import TextComponent from 'components/atoms/text';
import s from './inputLabel.styles';
import {fontNames} from 'theme/fonts';

const InputLabel = ({children, small}) => {
  return (
    <View style={!small && s.labelWrapper}>
      <TextComponent
        type={small ? fontNames.labelBold : fontNames.header4}
        color="black">
        {children}
      </TextComponent>
    </View>
  );
};

InputLabel.propTypes = {
  small: bool,
};

export default InputLabel;
