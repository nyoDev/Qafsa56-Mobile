import {StyleSheet} from 'react-native';
import Colors from 'theme/colors';
import Fonts from 'theme/fonts';

const styles = {
  container: {
    paddingBottom: 16,
  },
  wrapper: {
    height: 50,
    borderColor: Colors.shadow,
    borderWidth: 0,
    paddingHorizontal: 20,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginTop: 4,
  },
  gray: {
    backgroundColor: Colors.highlight,
    borderColor: Colors.transparent,
  },
  input: {
    flex: 1,
    height: 50,
    ...Fonts.tinyTextRegular,
    color: Colors.slate100,
  },
  iconWrapper: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  leftIcon: {
    marginRight: 10,
  },
  leftPadding: {
    paddingLeft: 16,
  },
  rightPadding: {
    paddingRight: 16,
  },
  focused: {
    borderColor: Colors.primaryColor100,
  },
  error: {
    borderColor: Colors.alert100,
  },
  success: {
    borderColor: Colors.success100,
  },
  disabled: {
    backgroundColor: Colors.light,
  },
  promoCodeWrapper: {
    backgroundColor: Colors.primaryColor10,
    borderWidth: 0,
  },
  noteMessage: {
    paddingTop: 6,
  },
  textAreaWrapper: {
    height: 120,
    justifyContent: 'flex-start',
  },
  textAreaInput: {
    height: 120,
    textAlignVertical: 'top',
  },
};

const s = StyleSheet.create(styles);

export default s;
