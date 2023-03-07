import React, {useState, useCallback} from 'react';
import {View, TextInput, Pressable, I18nManager} from 'react-native';
import TextComponent from 'components/atoms/text';
import InputLabel from 'components/atoms/input/inputLabel';
import InputError from 'components/atoms/input/inputError';
import PasswordHiddenIcon from 'components/atoms/icons/passwordHidden';
import PasswordVisibleIcon from 'components/atoms/icons/passwordVisible';
import {Colors} from 'theme';
import s from './input.styles';

const tabIconSize = 38;

const Input = ({
  secureTextEntry,
  value,
  placeholder,
  error,
  success,
  disabled,
  LeftIcon,
  RightIcon,
  ErrorIcon,
  label,
  errorMessage,
  style,
  onFocus,
  onBlur,
  onSubmitEditing,
  promoCodeApplied,
  gray,
  noteMessage,
  inputRef,
  textArea,
  ...rest
}) => {
  const [isTextHidden, changeTextHiddenFlag] = useState(true);
  const [isFocused, changeFocusedState] = useState(false);

  const toggleTextHiddenFlag = useCallback(() => {
    changeTextHiddenFlag(!isTextHidden);
  }, [isTextHidden]);

  const handleFocus = useCallback(() => {
    changeFocusedState(true);
    onFocus && onFocus();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    changeFocusedState(false);
    onBlur && onBlur();
  }, [onBlur]);

  return (
    <View style={[s.container, style]}>
      {label && <InputLabel small >{label}</InputLabel>}
      <View
        style={[
          s.wrapper,
          isFocused && s.focused,
          disabled && s.disabled,
          success && s.success,
          error && s.error,
          LeftIcon && s.leftPadding,
          RightIcon && s.rightPadding,
          promoCodeApplied && s.promoCodeWrapper,
          gray && s.gray,
          textArea && s.textAreaWrapper
        ]}>
        {LeftIcon && (
          <View style={[s.iconWrapper, s.leftIcon]}>{LeftIcon()}</View>
        )}
        <TextInput
          style={[s.input,textArea&&s.textAreaInput]}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && isTextHidden}
          value={value}
          editable={!disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={Colors.silver}
          underlineColorAndroid="transparent"
          onSubmitEditing={onSubmitEditing}
          textAlign={I18nManager.isRTL ? 'right' : 'left'}
          ref={inputRef}
          {...rest}
        />

        {RightIcon && <View style={s.iconWrapper}>{RightIcon()}</View>}
        {secureTextEntry && (
          <Pressable style={s.iconWrapper} onPress={toggleTextHiddenFlag}>
            {isTextHidden ? (
              <PasswordVisibleIcon
                fill={Colors.shadow}
                size={tabIconSize}
                width={tabIconSize}
                height={tabIconSize}
              />
            ) : (
              <PasswordHiddenIcon
                fill={Colors.shadow}
                size={tabIconSize}
                width={tabIconSize}
                height={tabIconSize}
              />
            )}
          </Pressable>
        )}
      </View>
      {!!errorMessage && (
        <InputError RightIcon={ErrorIcon}>{errorMessage}</InputError>
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

export default Input;
