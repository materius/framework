import webpackConfig from './webpack.config.js';

module.exports = {
  src: './src/scripts/app.js',
  dest: './dist/scripts/',
  watch: [
    './src/scripts/*.*',
    './src/scripts/**/*.*',
  ],
  webpack: {
    config: webpackConfig,
  },
}
