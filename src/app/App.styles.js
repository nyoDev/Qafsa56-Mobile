import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor100,
  },
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor100,
  },
  logo: {
    height: 100,
    width: 100,
  },
  safeAreaProvider: {
    backgroundColor: Colors.primaryColor100,
  },
});

export default styles;
