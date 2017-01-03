import webpackConfig from './webpack.config.js';

module.exports = {
  src: './assets/scripts/app.js',
  dest: './dist/scripts/',
  watch: [
    './assets/scripts/*.*',
    './assets/scripts/**/*.*',
  ],
  webpack: {
    config: webpackConfig,
  },
}
