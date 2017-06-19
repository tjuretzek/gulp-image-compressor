const gulp = require('gulp');
const newer = require('gulp-newer');
const debug = require('gulp-debug');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');

module.exports = function sync() {
  return gulp.src(['original-images/**'])
    .pipe(newer('compressed-images'))
    .pipe(debug({title: 'compressing:'}))
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo(),
      imageminPngquant({
        speed: 2,
        quality: 60-95
      }),
      imageminJpegoptim({
        max: 60
      }),
      imageminMozjpeg({
        quality: 60
      }),
      imageminJpegRecompress({
        loops: 4,
        min: 60,
        max: 95,
        quality:'high'
      })
    ]))
    .pipe(gulp.dest('compressed-images'));
};