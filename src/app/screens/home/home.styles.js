import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  searchInputContainer: {
    marginTop: 30,
  },
  searchButton: {
    width: '100%',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 2,
    backgroundColor: Colors.slate100,
  },
});

export default styles;
