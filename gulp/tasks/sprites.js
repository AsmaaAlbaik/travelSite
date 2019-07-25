var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename');

    var config = {
      mode: {
        css: {
          render: {
           bust: false,
            scss: {
              // template: './gulp/templates/sprite.css'
            }
          }
        }
      }
    }

    gulp.task('createSprite' , function(){
      return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(svgSprite(config))
            .pipe(gulp.dest('./app/temp/sprite/'));
    });


    gulp.task('copySpriteCss' , function(){
      return gulp.src('./app/temp/sprite/css/*.scss')
            .pipe(rename('_sprite.scss'))
            .pipe(gulp.dest('./app/assets/styles/sass/modules'));
    });


    // gulp.task('copySpriteSvg'  , function(){
    //   return gulp.src('./app/temp/sprite/css/svg/*.svg')
    //         .pipe(gulp.dest('./app/svg/'));
    // });

    // gulp.task('icons' , ['createSprite' ,'copySpriteCss', 'copySpriteSvg']);
