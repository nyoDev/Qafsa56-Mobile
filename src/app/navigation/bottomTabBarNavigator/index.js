import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {defaultLogoWithIconHeaderConfig} from 'navigation/headers';
import Home from 'screens/home';
import QafasasList from 'screens/qafasasList';
import Account from 'screens/account';
import HomeIcon from 'components/atoms/icons/home';
import ListIcon from 'components/atoms/icons/list';
import AccountIcon from 'components/atoms/icons/account';
import {isIos} from 'services/helpers';
import {screensNames} from 'constants/navigation';
import {Colors, Fonts} from 'theme';
import s from './bottomTabBarNavigator.styles';
import {useSelector} from 'react-redux';

const tabIconSize = 26;
const Tab = createBottomTabNavigator();

const TabContainer = () => {
  const {authenticationState} = useSelector(state => state.reducer);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [s.tabBar, isIos ? {paddingTop: 5} : {height: 70}],
        tabBarActiveTintColor: Colors.slate100,
        tabBarInactiveTintColor: Colors.silver,
        showLabel: true,
        tabBarLabelStyle: {
          ...Fonts.tinyTextRegular,
        },
      }}>
      <Tab.Screen
        name={screensNames.homeTab}
        component={Home}
        options={({navigation}) => ({
          ...defaultLogoWithIconHeaderConfig({navigation, authenticationState}),
          tabBarLabel: 'الرئسية',
          tabBarIcon: ({color}) => {
            return (
              <HomeIcon
                fill={color}
                size={tabIconSize}
                width={tabIconSize}
                height={tabIconSize}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name={screensNames.qafasasListTab}
        component={QafasasList}
        options={({navigation}) => ({
          ...defaultLogoWithIconHeaderConfig({navigation, authenticationState}),
          tabBarLabel: 'قائمتي',
          tabBarIcon: ({color}) => {
            return (
              <ListIcon
                size={tabIconSize}
                fill={color}
                width={tabIconSize}
                height={tabIconSize}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name={screensNames.accountTab}
        component={Account}
        options={({navigation}) => ({
          ...defaultLogoWithIconHeaderConfig({navigation, authenticationState}),
          tabBarLabel: 'حسابي',
          tabBarIcon: ({color}) => {
            return (
              <AccountIcon
                fill={color}
                size={tabIconSize}
                width={tabIconSize}
                height={tabIconSize}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabContainer;
