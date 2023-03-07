module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        alias: {
          components: './src/app/components',
          constants: './src/app/constants',
          fixtures: './src/app/fixtures',
          images: './src/app/images',
          navigation: './src/app/navigation',
          screens: './src/app/screens',
          services: './src/app/services',
          theme: './src/app/theme',
          assets: './src/assets',
        },
      },
    },
  },
};
