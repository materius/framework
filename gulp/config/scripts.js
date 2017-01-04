import webpackConfig from './webpack.config.js';

module.exports = {
  src: './src/scripts/materius.js',
  dest: './dist/js/',
  watch: [
    './src/scripts/*.*',
    './src/scripts/**/*.*',
  ],
  webpack: {
    config: webpackConfig,
  },
}
