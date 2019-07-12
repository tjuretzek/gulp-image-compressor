const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');
const imageminWebp = require('imagemin-webp');

module.exports = function convertWebp() {
  return gulp.src(['original-images/**/*.{jpg,jpeg,png}'])
    .pipe(plumber())
    .pipe(webp({
      quality: 70,
      verbose: true
    }))
    .pipe(gulp.dest('temp-images'));
};