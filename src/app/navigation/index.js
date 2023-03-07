import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {defaultBackWithTitleHeaderConfig} from 'navigation/headers';
import SignIn from 'screens/signIn';
import SignUp from 'screens/signUp';
import TabContainer from 'navigation/bottomTabBarNavigator';
import EditAccount from 'screens/editAccount';
import AddQafas from 'screens/addQafas';
import {screensNames} from 'constants/navigation';
//import s from './navigations.styles';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackContainer = ({}) => {
  //   const {userInfo} = useSelector((state) => state.reducer);
  const {authenticationState} = useSelector(state => state.reducer);
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={screensNames.bottomTabNavigator}
        component={TabContainer}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={screensNames.editAccount}
        component={EditAccount}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'تعديل الحساب',
        })}
      />
      <MainStack.Screen
        name={screensNames.addQafas}
        component={AddQafas}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'اضافة قفاص',
        })}
      />
    </MainStack.Navigator>
  );
};

const AppContainer = ({}) => {
  return (
    <RootStack.Navigator>
      <MainStack.Screen
        name={screensNames.signIn}
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={screensNames.signUp}
        component={SignUp}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'التسجيل',
        })}
      />
      <RootStack.Screen
        name={screensNames.mainStack}
        component={MainStackContainer}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default AppContainer;
