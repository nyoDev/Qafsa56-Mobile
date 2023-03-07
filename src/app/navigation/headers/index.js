import React from 'react';
import {Pressable, View} from 'react-native';
import ArrowBigIcon from 'components/atoms/icons/arrowBig';
import Logo from 'components/atoms/logo';
import {screensNames} from 'constants/navigation';
import {Colors} from 'theme';
import s from './headers.styles';
import Button from 'components/atoms/button';

const tabIconSize = 28;

export const defaultBackWithTitleHeaderConfig = ({navigation}) => ({
  headerTitleAlign: 'left',
  headerStyle: s.headerStyle,
  headerTitleStyle: s.headerTitleStyle,
  headerRight: () => null,
  headerLeft: () => (
    <Pressable
      onPress={() => navigation.goBack()}
      style={s.leftElementForGoBack}>
      <ArrowBigIcon
        fill={Colors.slate100}
        size={tabIconSize}
        width={tabIconSize}
        height={tabIconSize}
        direction={'right'}
      />
    </Pressable>
  ),
});
export const defaultLogoWithIconHeaderConfig = ({
  navigation,
  authenticationState,
}) => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerStyle: s.headerStyle,
  headerTitle: () => null,
  headerLeft: () => <Logo resizeMode="center" style={s.leftElement} />,
  headerRight: () => null,
  headerRight: () => {
    return (
      <View style={s.rightElement}>
        <Button
          onPress={() => {
            navigation.navigate(screensNames.addQafas);
          }}
          size={'small'}
          text={'اضافة قفاص'}
          theme="primary"
          disabled={!authenticationState}
        />
      </View>
    );
  },
});
