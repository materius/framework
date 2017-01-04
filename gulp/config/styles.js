module.exports = {
  src: [
    './src/stylus/*.styl',
  ],
  dest: './dist/styles/',
  watch: [
    './src/stylus/*.styl',
    './src/stylus/**/*.styl',
    './src/stylus/**/**/*.styl',
  ],
}
