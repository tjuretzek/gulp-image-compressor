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
        speed: 2
      }),
      imageminJpegoptim({
        max: 95
      }),
      imageminMozjpeg({
        quality: 70
      }),
      imageminJpegRecompress({
        loops: 4,
        min: 70,
        max: 95,
        quality:'high'
      })
    ]))
    .pipe(gulp.dest('compressed-images'));
};