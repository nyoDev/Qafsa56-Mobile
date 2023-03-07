import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: Colors.slate100,
    paddingHorizontal: 10,
    marginHorizontal: 25,
    alignItems:"center",
    paddingVertical:30
  },
  title: {
    marginBottom:0,
    color:Colors.white
    // marginTop: 40,
    // marginBottom: 20,
  },
  subTitle: {
    marginBottom:20,
    color:Colors.white
    // marginTop: 40,
    // marginBottom: 20,
  },
  noButton: {
    marginHorizontal: 10,
    backgroundColor:Colors.primaryColor100,
    width:100
  },
  yesButton: {
    marginHorizontal: 10,
    width:100
  },
});

export default styles;
