import React from 'react';
import {View} from 'react-native';
import TextComponent from 'components/atoms/text';
import {Colors} from 'theme';
import s from './inputError.styles';

const InputError = ({children, RightIcon}) => {
  return (
    <View style={s.errorWrapper}>
      {RightIcon && <View style={s.iconWrapper}>{RightIcon()}</View>}
      <View style={s.textWrapper}>
        <TextComponent type="smallTextRegular" color={Colors.alert100}>
          {children}
        </TextComponent>
      </View>
    </View>
  );
};

export default InputError;