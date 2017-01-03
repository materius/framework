'use strict';

import gulp from 'gulp';
import stylus from 'gulp-stylus';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import settings from '../config/styles.js';

gulp.task('stylus', function () {
  return gulp.src(settings.src)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    //.pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(settings.dest));
});

gulp.task('stylus:watch', function () {
  gulp.watch(settings.watch, ['stylus', browserSync.reload]);
});
