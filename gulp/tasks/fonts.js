'use strict';

import gulp from 'gulp';
import settings from '../config/fonts.js';

gulp.task('fonts', function () {
  return gulp.src(settings.src)
    .pipe(gulp.dest(settings.dest));
});
