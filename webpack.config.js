// See https://webpack.js.org/configuration

const cauldronWebpackConfig = require('@magica11y/cauldron/webpack.config');
const path = require('path');
const { customizeObject, mergeWithCustomize } = require('webpack-merge');

const webpackMergeWithCustomization = mergeWithCustomize({
  customizeObject: customizeObject({
    entry: 'replace',
  }),
});

module.exports = webpackMergeWithCustomization(cauldronWebpackConfig, {
  entry: {
    prefersReducedMotion: './src',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
});
