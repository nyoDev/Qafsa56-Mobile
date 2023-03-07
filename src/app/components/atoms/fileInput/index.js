import React, {useState, useCallback} from 'react';
import {View, TextInput, Pressable, I18nManager} from 'react-native';
import TextComponent from 'components/atoms/text';
import InputLabel from 'components/atoms/input/inputLabel';
import InputError from 'components/atoms/input/inputError';
import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import PasswordHiddenIcon from 'components/atoms/icons/passwordHidden';
import PasswordVisibleIcon from 'components/atoms/icons/passwordVisible';
import {Colors} from 'theme';
import s from './fileInput.styles';

const tabIconSize = 38;

const FileInput = ({
  value,
  placeholder,
  error,
  label,
  errorMessage,
  style,
  onPressButton,
  gray,
  noteMessage,
}) => {
  return (
    <View style={[s.container, style]}>
      {label && <InputLabel small>{label}</InputLabel>}
      <View style={[s.wrapper, error && s.error, gray && s.gray]}>
        <View style={s.input}>
          <Text type={'tinyTextRegular'} color={Colors.silver}>
            {value.length !== 0
              ? `عدد الملفات المرفقة : ${value.length}`
              : placeholder}
          </Text>
        </View>
        <Button onPress={onPressButton} size={'small'} text={'تصفح الملفات'} />
      </View>
      {!!errorMessage && (
        <InputError >{errorMessage}</InputError>
      )}
      {!!noteMessage && (
        <TextComponent
          type="smallTextRegular"
          color={Colors.primaryColor100}
          textStyle={s.noteMessage}>
          {noteMessage}
        </TextComponent>
      )}
    </View>
  );
};

export default FileInput;
