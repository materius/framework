module.exports = {
  src: [
    './views/*.pug',
  ],
  dest: './dist/',
  watch: [
    './views/*.pug',
    './views/**/*.pug',
    './views/**/**/*.pug',
  ],
  options: {
    //
  },
}
