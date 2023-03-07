import React, {useMemo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {bool, func, node, string} from 'prop-types';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import {ApplicationStyles, Colors} from 'theme';
import s from './container.styles';

const Container = ({
  children,
  isLoading,
  withPadding,
  isError,
  center,
  scrollable,
  withFloatingButton,
  onPressFloatingButton,
  floatingButtonText,
  StickyBottomComponent,
  onPressErrorButton,
  style,
}) => {
  const Component = useMemo(
    () => (scrollable ? KeyboardAwareScrollView : View),
    [scrollable],
  );
  const LoadingComponent = () => (
    <ActivityIndicator size="large" animating={true} color={Colors.slate100} />
  );
  const ErrorComponent = () => (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Text
        textStyle={{
          marginVertical: 10,
        }}
        type="smallTextBold"
        color={Colors.slate100}>
        حدث خطأ ما !
      </Text>
      <Button
        height={50}
        width={120}
        text={'اعادة التحميل'}
        textSize="labelBold"
        onPress={onPressErrorButton}
      />
    </View>
  );
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <SafeAreaView
        style={[
          ApplicationStyles.screen.layoutWrapper,
          style,
          isLoading || isError
            ? {justifyContent: 'center', alignItems: 'center'}
            : null,
          center ? {justifyContent: 'center', alignItems: 'center'} : null,
        ]}>
        <Component
          contentInsetAdjustmentBehavior="automatic"
          style={
            !scrollable && !withPadding
              ? {}
              : ApplicationStyles.screen.container
          }
          contentContainerStyle={[
            scrollable && withPadding && ApplicationStyles.screen.container,
            isLoading || isError
              ? {flex: 1, justifyContent: 'center', alignItems: 'center'}
              : null,
            center ? {flex: 1, justifyContent: 'center'} : null,
          ]}
          enableOnAndroid>
          {isLoading && !isError ? (
            <LoadingComponent />
          ) : isError ? (
            <ErrorComponent />
          ) : (
            [children]
          )}
        </Component>
        {!isLoading && !isError
          ? StickyBottomComponent && StickyBottomComponent()
          : null}
        {withFloatingButton && (
          <View style={s.floatingButton}>
            <Button onPress={onPressFloatingButton} text={floatingButtonText} />
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

Container.propTypes = {
  children: node,
  withPadding: bool,
  isLoading: bool,
  isError: bool,
  onPressErrorButton: func,
  center: bool,
  scrollable: bool,
  withFloatingButton: bool,
  onPressFloatingButton: func,
  floatingButtonText: string,
  StickyBottomComponent: func,
};

Container.defaultProps = {
  scrollable: true,
  withPadding: true,
};

export default Container;
