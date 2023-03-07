import {Platform} from 'react-native';
import {filter, equals, includes, uniq} from 'ramda';

export const isIos = Platform.OS === 'ios';

export const keyExtractor = (item, index) => String(index) + String(item.id);

export const removeArrayValue = (arr, value) =>
  filter(item => !equals(item, value), arr);

export const addArrayValue = (arr, value) => [...arr, value];

export const toggleArrayValue = (arr, value) =>
  includes(value, arr)
    ? removeArrayValue(arr, value)
    : uniq(addArrayValue(arr, value));
