import React from 'react';
import {View, TouchableWithoutFeedback, I18nManager} from 'react-native';
import {string, func, bool} from 'prop-types';
import Text from 'components/atoms/text';
import ArrowIcon from 'components/atoms/icons/arrow';
import {Colors} from 'theme/index';
import {fontNames} from 'theme/fonts';
import s from './navigationButton.styles';

const NavigationButton = ({onPress, label, label2, big, blueIcon}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[s.wrapper, big && s.big]}>
        <Text  type={big && fontNames.header4}>
          {label} {label2 ? ' : ' + label2 : null}
        </Text>
        <ArrowIcon
          width={big ? 32 : 24}
          height={big ? 32 : 24}
          fill={blueIcon ? Colors.primaryColor100 : Colors.slate100}
          type="chevron"
          direction={I18nManager.isRTL ? 'left' : 'right'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

NavigationButton.propTypes = {
  onPress: func,
  label: string,
  big: bool,
  blueIcon: bool,
};

export default NavigationButton;
