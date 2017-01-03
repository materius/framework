var fs = require('fs');

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
    data: {
      colors: JSON.parse(fs.readFileSync('assets/json/colors.json', 'utf8')),
    },
    pretty:true,
  },
}
