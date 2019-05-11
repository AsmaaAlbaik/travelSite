var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();


  gulp.task('watch' , function() {
    browserSync.init({
      server: {
        notify: false,
        baseDir : "app"
      }
    });
    watch('./app/index.html').on('change', browserSync.reload);
    watch('./app/assets/styles/**/*.scss', gulp.series('styles'));

  });
