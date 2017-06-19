const gulp = require('gulp');
const runSequence = require('run-sequence');
const argv = require('./tasks/helper/arguments').argv;

gulp.task('clean', require('./tasks/clean'));
gulp.task('images', require('./tasks/images'));


gulp.task('compress', () => runSequence(
  ['clean'],
  ['images', 'watch']
));

gulp.task('watch', () => {
  if (!argv.watch) {
    return;
  }
  gulp.watch(['original-images/**'], ['images']);
});