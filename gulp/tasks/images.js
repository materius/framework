'use strict';

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import settings from '../config/images.js';

gulp.task('images', function () {
  return gulp.src(settings.src)
    .pipe(imagemin())
    .pipe(gulp.dest(settings.dest));
});
