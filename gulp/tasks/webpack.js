'use strict';

import gulp from 'gulp';
import webpack from 'gulp-webpack';
import browserSync from 'browser-sync';
import settings from '../config/scripts.js';

gulp.task('webpack', function () {
  return gulp.src(settings.src)
    .pipe(webpack(settings.webpack.config))
    .pipe(gulp.dest(settings.dest));
});

gulp.task('webpack:watch', function () {
  gulp.watch(settings.watch, ['webpack', browserSync.reload]);
});
