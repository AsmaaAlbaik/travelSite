var gulp = require('gulp'),
  autoprefixer = require('autoprefixer'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync').create();
  sass.compiler = require('node-sass');


gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/main.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/temp/styles'))
    .pipe(browserSync.stream());
});
