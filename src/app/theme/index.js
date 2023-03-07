import Colors from './colors';
import Fonts from './fonts';
import Metrics from './metrics';
import ApplicationStyles from './applicationStyles';
export {height, width, aspectRatio, isTablet, notchHeight} from './scales';

export {Colors, Fonts, Metrics, ApplicationStyles};

const theme = {
  ...Fonts,
  ...Colors,
};
