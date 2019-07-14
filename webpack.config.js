const webpackMerge = require('webpack-merge');

const cauldronWebpackConfig = require('@magica11y/cauldron/webpack.config.js');

const webpackMergeWithStrategy = webpackMerge.strategy({
  entry: 'replace',
});

module.exports = webpackMergeWithStrategy(cauldronWebpackConfig, {
  entry: {
    prefersReducedMotion: './src/prefersReducedMotion',
  },
});
