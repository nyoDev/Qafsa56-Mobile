import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  userInfoSubContainer: {
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  userFullName:{
    width: 200,
    lineHeight: 18,
  },
  signOutButton: {
    width: '100%',
    marginTop: 50,
  },
  versionText: {
    alignSelf: 'center',
    marginVertical: 15,
  },
});

export default styles;
