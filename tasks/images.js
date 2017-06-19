const gulp = require('gulp');
const newer = require('gulp-newer');
const debug = require('gulp-debug');
const imagemin = require('gulp-imagemin');
const pngout = require('imagemin-pngout');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');


module.exports = function sync() {
  return gulp.src(['original-images/**'])
    .pipe(newer('compressed-images'))
    .pipe(debug({title: 'compressing:'}))
    .pipe(imagemin([
      imagemin.gifsicle(),
      imageminJpegoptim(),
      imageminMozjpeg(),
      imageminJpegRecompress({
        loops: 4,
        min: 50,
        max: 95,
        quality:'high'
      }),
      imagemin.optipng(),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('compressed-images'));
};