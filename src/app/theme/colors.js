const colorsPalette = {
  primaryColor100: '#facc15',
  primaryColor85: '#fbd12c',
  primaryColor70: '#fbd644',
  primaryColor55: '#fcdb5b',
  primaryColor40: '#fce073',
  primaryColor25: '#fde68a',
  primaryColor10: '#fdeba1',
  primaryColor5: '#fdeba1',
  slate100:"#0f172a",
  slate85:"#272e3f",
  slate70:"#3f4555",
  slate55:"#575d6a",
  slate40:"#6f747f",
  slate25:"#878b95",
  slate10:"#9fa2aa",
  slate5:"#b7b9bf",
  black: '#090909',
  steel: '#262626',
  iron: '#555555',
  silver: '#9d9d9d',
  shadow: '#d9d9d9',
  light: '#e9e9e9',
  highlight: '#f5f5f5',
  purple: '#DE0AF4',
  blue: '#076AFF',
  success100: '#07935F',
  success85: '#2CA377',
  success25: '#C1E4D7',
  success10: '#E6F4EF',
  warning100: '#e9c46a',
  alert100: '#D61C22',
  alert85: '#DC3E43',
  alert25: '#F5C6C8',
  alert15: '#FBE8E9',
};

const Colors = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'rgba(0,0,0,0)',
  //theme
  background: '#F9FAFF',
  ...colorsPalette,
};

export const colorNames = Object.entries(Colors).reduce(
  (acc, [key]) => ({...acc, [key]: key}),
  {},
);

export default Colors;
