'use strict';

import gulp from 'gulp';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import settings from '../config/views.js';

gulp.task('pug', function () {
  return gulp.src(settings.src)
    .pipe(pug(settings.options))
    .pipe(gulp.dest(settings.dest));
});

gulp.task('pug:watch', function () {
  gulp.watch(settings.watch, ['pug', browserSync.reload]);
});
