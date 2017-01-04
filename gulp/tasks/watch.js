'use strict';

import gulp from 'gulp';

gulp.task('watch', ['default', 'webpack:watch', 'stylus:watch', 'browser-sync']);
