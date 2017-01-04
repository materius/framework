module.exports = {
  src: [
    './src/stylus/*.styl',
  ],
  dest: './dist/css/',
  watch: [
    './src/stylus/*.styl',
    './src/stylus/**/*.styl',
    './src/stylus/**/**/*.styl',
  ],
}
