import {StyleSheet} from 'react-native';
import {Colors} from 'theme/index';

const styles = {
  wrapper: {
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.slate100,
    flexDirection: 'row',
  },
  big: {
    paddingVertical: 26,
  },
};

const s = StyleSheet.create(styles);

export default s;
