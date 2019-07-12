const gulp = require('gulp');
const plumber = require('gulp-plumber');
const jp2 = require('gulp-jpeg-2000');

module.exports = function convertJPEG2000() {
  return gulp.src(['original-images/**/*.{jpg,jpeg,png}'])
    .pipe(plumber())
    .pipe(jp2())
    .pipe(gulp.dest('temp-images'));
};