import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {scale, width} from './scales';

const productMarginBuffer = Platform.OS === 'ios' ? 12 : 24;
const defaultTabBarHeight = 49;
const hasNotch = DeviceInfo.hasNotch();

const metrics = {
  baseMargin: 10,
  largeMargin: 20,
  smallMargin: 5,
  basePadding: 10,
  largePadding: 20,
  smallPadding: 5,
  productMarginBuffer,
  filterBarHeight: 56,
  hasNotch,
  // TODO replace deprecated var - use new Layout when it's done
  // https://github.com/facebook/react-native/pull/20999
  tabBarHeight: DeviceInfo.isIPhoneX_deprecated
    ? defaultTabBarHeight + 34
    : defaultTabBarHeight,
  headerZIndex: 3,
  filterBarZIndex: 2,
  productCardWidth: scale(160),
  productCardHeight: scale(213),
  productCardWidthBig: scale(340),
  productCardHeightBig: scale(453),
};

export default metrics;
