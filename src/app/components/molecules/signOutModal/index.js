import React from 'react';
import {View} from 'react-native';
import Modal from 'components/atoms/modal';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import s from './logoutModal.styles';
import {Colors} from 'theme';

const SignOutModal = ({close, visible, onPressNo, onPressYes}) => {
  return (
    <Modal
      close={close}
      isVisible={visible}
      onBackdropPress={close}
      style={s.modal}
      avoidKeyboard>
      <View style={s.content}>
        <Text type="header5" color={Colors.white} textStyle={s.title}>
          هل تريد تسجيل الخروج ؟
        </Text>
        <View style={{
          flexDirection:'row',
          justifyContent:"center",
          alignItems:"center"
        }} >

        <Button onPress={onPressNo} size={"small"} text={'لا'} style={s.noButton} />
        <Button onPress={onPressYes} size={"small"} text={'نعم'} theme={'ghost'} style={s.yesButton}/>
        </View>
      </View>
    </Modal>
  );
};

export default SignOutModal;
