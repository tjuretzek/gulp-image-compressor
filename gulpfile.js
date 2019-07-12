const gulp = require('gulp');
const runSequence = require('run-sequence');
const argv = require('./tasks/helper/arguments').argv;

gulp.task('clean', require('./tasks/clean'));
gulp.task('convertWebp', require('./tasks/webp'));
gulp.task('images', require('./tasks/images'));


gulp.task('compress', () => runSequence(
  ['clean'],
  ['images']
));

gulp.task('convert', () => runSequence(
  ['clean'],
  ['convertWebp'],
  ['images']
));

gulp.task('watch', () => {
  if (!argv.watch) {
    return;
  }
  gulp.watch(['original-images/**'], ['images']);
});