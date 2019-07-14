// See https://webpack.js.org/configuration

const cauldronWebpackConfig = require('@magica11y/cauldron/webpack.config.js');
const path = require('path');
const webpackMerge = require('webpack-merge');

const webpackMergeWithStrategy = webpackMerge.strategy({
  entry: 'replace',
});

module.exports = webpackMergeWithStrategy(cauldronWebpackConfig, {
  entry: {
    prefersReducedMotion: './src',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
});
