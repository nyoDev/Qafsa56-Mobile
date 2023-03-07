import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'theme';

const s = StyleSheet.create({
  headerStyle: {
    shadowColor: Colors.slate100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderBottomWidth: 0,
    borderColor: Colors.highlight,
    elevation: 0,
    backgroundColor: Colors.primaryColor100,
  },
  headerTitleStyle: {
    ...Fonts.smallTextBold,
  },
  rightElement: {
    marginRight: 18,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftElement: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    width: 70,
    height: 45,
    marginLeft: 10,
  },
  leftElementForGoBack: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    marginLeft: 10,
  },
});

export default s;
