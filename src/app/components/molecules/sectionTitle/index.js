import React from 'react';
import {string} from 'prop-types';
import {View} from 'react-native';
import Text from 'components/atoms/text';
import {fontNames} from 'theme/fonts';
import s from './sectionTitle.styles';

const typeSwitcher = type => {
  const types = {
    [fontNames.header1]: s.header1Padding,
    [fontNames.header2]: s.header2Padding,
    [fontNames.header3]: s.header3Padding,
    [fontNames.header4]: s.header4Padding,
  };

  return types[type];
};

const SectionTitle = ({title, color, type}) => (
  <View style={[s.container, typeSwitcher(type)]}>
    <Text type={type} color={color}>
      {title}
    </Text>
  </View>
);

SectionTitle.propTypes = {
  title: string.isRequired,
  color: string,
  type: string,
};

SectionTitle.defaultProps = {
  color: 'black',
  type: fontNames.header1,
};

export default SectionTitle;
