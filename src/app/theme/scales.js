import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const {width, height} = Dimensions.get('window');

export const aspectRatio = height / width;

export const isTablet = aspectRatio < 1.6;

// Guideline sizes are based on Iphone X screen
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

const getNotchHight = () => {
  let notchHeight = 0;
  if (Platform.OS == 'ios') {
    if (getStatusBarHeight() == 20) {
      notchHeight = 25;
    } else if (getStatusBarHeight() > 20) {
      notchHeight = getStatusBarHeight() + 34;
    }
  } else if (Platform.OS == 'android') {
    if (getStatusBarHeight() > 25) {
      notchHeight = 0;
    } else {
      notchHeight = getStatusBarHeight();
    }
  }
  return notchHeight;
};
export const notchHeight = getNotchHight();
