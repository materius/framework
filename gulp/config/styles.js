module.exports = {
  src: [
    './assets/stylus/*.styl',
  ],
  dest: './dist/styles/',
  watch: [
    './assets/stylus/*.styl',
    './assets/stylus/**/*.styl',
    './assets/stylus/**/**/*.styl',
  ],
}
