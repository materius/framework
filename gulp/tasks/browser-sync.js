'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import settings from '../config/browser-sync.js';

gulp.task('browser-sync', function () {
  browserSync.init(settings);
});
