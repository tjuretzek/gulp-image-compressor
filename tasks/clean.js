const gulp = require('gulp');
const rimraf = require('gulp-rimraf');

module.exports = function startServer() {
  return gulp.src('compressed-images', { read: false })
    .pipe(rimraf());
};
