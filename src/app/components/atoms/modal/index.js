import React from 'react';
import Modal from 'react-native-modal';
import s from './modal.styles';

const ModalComponent = ({
  style,
  onSwipeComplete,
  onBackdropPress,
  children,
  isVisible,
  close,
  ...props
}) => (
  <Modal
    style={[s.modal, style]}
    onSwipeComplete={onSwipeComplete || close}
    isVisible={isVisible}
    onBackdropPress={onBackdropPress || close}
    animationInTiming={400}
    animationOutTiming={400}
    backdropTransitionInTiming={400}
    backdropTransitionOutTiming={400}
    useNativeDriver
    hideModalContentWhileAnimating
    {...props}>
    {children}
  </Modal>
);

export default ModalComponent;