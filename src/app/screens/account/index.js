import {View, Linking} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Container from 'components/templates/container';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import SectionTitle from 'components/molecules/sectionTitle';
import NavigationButton from 'components/molecules/navigationButton';
import SignOutModal from 'components/molecules/signOutModal';
import {
  setToken,
  setUserInfo,
  changeToUnAuthenticated,
} from 'services/redux/actions';
import {screensNames} from 'constants/navigation';
import {Colors} from 'theme';
import {fontNames} from 'theme/fonts';
import s from './account.styles';

const Account = () => {
  const dispatch = useDispatch();
  const {navigate, reset} = useNavigation();

  const {userInfo} = useSelector(state => state.reducer);

  const [signOutModalVisible, setSignOutModalVisible] = useState(false);

  const setTokenFunction = returnedData => dispatch(setToken(returnedData));
  const setUserInfoFunction = returnedData =>
    dispatch(setUserInfo(returnedData));
  const changeToUnAuthenticatedFunction = () =>
    dispatch(changeToUnAuthenticated());

  const signOutFunction = () => {
    setTokenFunction('');
    setUserInfoFunction({});
    changeToUnAuthenticatedFunction();
    reset({
      index: 0,
      routes: [{name: screensNames.signIn}],
    });
  };

  return (
    <Container
      style={{
        backgroundColor: Colors.primaryColor100,
      }}>
      <SectionTitle title={'معلومات الحساب'} type={fontNames.header4} />
      <View style={s.userInfoContainer}>
        <View style={s.userInfoSubContainer}>
          <Text type="header5" textStyle={s.userFullName}>
            الأسم : {userInfo.fullName}
          </Text>
          <Text type="smallTextRegular">
            رقم الهاتف : {userInfo.shopOrPagePhone}
          </Text>
          <Text type="smallTextRegular">
            اسم الصفحة : {userInfo.shopOrPageName}
          </Text>
        </View>
        <Button
          size={'small'}
          text={'تعديل المعلومات '}
          onPress={() => {
            navigate(screensNames.editAccount);
          }}
        />
      </View>
      <SectionTitle title={'معلومات اخرى'} type={fontNames.header4} />
      <NavigationButton
        label={'قفاصة على فيسبوك'}
        onPress={() => {
          Linking.openURL('https://www.facebook.com/qafasa56/');
        }}
      />
      {/* <NavigationButton
        label={'قفاصة على انستاغرام'}
        onPress={() => {
          Linking.openURL('https://qafasa56.com/');
        }}
      /> */}
      <NavigationButton
        label={'موقع الويب قفاصة 56'}
        onPress={() => {
          Linking.openURL('https://qafasa56.com/');
        }}
      />
      <NavigationButton
        label={'حول قفاصة 56'}
        onPress={() => {
          Linking.openURL('https://qafasa56.com/about');
        }}
      />
      <Button
        text={'تسجيل الخروج'}
        size={'medium'}
        style={s.signOutButton}
        onPress={() => {
          setSignOutModalVisible(true);
        }}
      />
      <Text textStyle={s.versionText}>الأصدار الحالي : 1.0.3</Text>
      <SignOutModal
        visible={signOutModalVisible}
        close={() => setSignOutModalVisible(false)}
        onPressNo={() => {
          setSignOutModalVisible(false);
        }}
        onPressYes={signOutFunction}
      />
    </Container>
  );
};
export default Account;
