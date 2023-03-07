import 'react-native-gesture-handler';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AppContainer from 'navigation';
import {height} from 'theme/scales';
import {images} from 'images';
import styles from './App.styles';

const App = () => {
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
  const opacity = useRef(new Animated.Value(1));
  const translateY = useRef(new Animated.Value(0));
  const init = useCallback(() => {
    RNBootSplash.hide();
    const useNativeDriver = true;
    Animated.stagger(250, [
      Animated.spring(translateY.current, {useNativeDriver, toValue: -50}),
      Animated.spring(translateY.current, {
        useNativeDriver,
        toValue: height,
      }),
    ]).start();

    Animated.timing(opacity.current, {
      useNativeDriver,
      toValue: 0,
      duration: 150,
      delay: 350,
    }).start(() => {
      setBootSplashIsVisible(false);
    });
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '464239118996-um04g5vnkj7i4sft2pvb1p302edm9fsd.apps.googleusercontent.com',
      androidClientId:
        '464239118996-9qretn6e05q2q1p4701t2edn5b23fa7g.apps.googleusercontent.com',
      offlineAccess: true,
    });
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded, init]);

  const BootsplashAnimationContent = useMemo(() => {
    return (
      <View style={styles.container}>
        {bootSplashIsVisible && (
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              styles.bootsplash,
              {opacity: opacity.current},
            ]}>
            <Animated.Image
              source={images.logo}
              fadeDuration={0}
              onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
              style={[
                styles.logo,
                {transform: [{translateY: translateY.current}]},
              ]}
            />
          </Animated.View>
        )}
      </View>
    );
  }, [bootSplashIsVisible]);
  if (bootSplashIsVisible) {
    return BootsplashAnimationContent;
  } else {
    return (
      <SafeAreaProvider style={styles.safeAreaProvider}>
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};

export default App;
