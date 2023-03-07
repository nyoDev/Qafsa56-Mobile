import React from 'react';
import {View} from 'react-native';
import Modal from 'components/atoms/modal';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import s from './titleModal.styles';
import {Colors} from 'theme';

const SignOutModal = ({close, visible, onPressDone, title, subTitle}) => {
  return (
    <Modal
      close={close}
      isVisible={visible}
      onBackdropPress={close}
      style={s.modal}
      avoidKeyboard>
      <View style={s.content}>
        <Text
          type="header5"
          color={Colors.white}
          center
          textStyle={subTitle ? s.title : s.subTitle}>
          {title}
        </Text>
        {subTitle ? (
          <Text type="header5" color={Colors.white} center textStyle={s.subTitle}>
            {subTitle}
          </Text>
        ) : null}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            onPress={onPressDone}
            size={'small'}
            text={'تم'}
            style={s.noButton}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SignOutModal;
