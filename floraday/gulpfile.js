let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let autoprefixer = require('gulp-autoprefixer');

//--browserSync 
gulp.task('browser-sync', function () {
   browserSync.init({
      server: {
         baseDir: "app/"
      }
   });
});


//-connecting to reloading
gulp.task('scss', function () {
   return gulp.src('app/scss/**/*.scss')
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(rename({ suffix: '.min', prefix: '' }))
      .pipe(autoprefixer(['last 15 versions']))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({ stream: true }))
});
gulp.task('script', function () {
   return gulp.src('app/js/*.js')
      .pipe(browserSync.reload({ stream: true }))
});
gulp.task('html', function () {
   return gulp.src('app/*.html')
      .pipe(browserSync.reload({ stream: true }))
});


//-connecting to reloading
gulp.task('css', function () {
   return gulp.src([
      'node_modules/magnific-popup/dist/magnific-popup.css',
      'node_modules/slick-carousel/slick/slick.css',
   ])
      .pipe(concat('_plag.scss'))
      .pipe(gulp.dest('app/scss'))
      .pipe(browserSync.reload({ stream: true }))
});




//-watching
gulp.task('watch', function () {
   gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
   gulp.watch('app/*.html', gulp.parallel('html'))
   gulp.watch('app/js/*.js', gulp.parallel('script'))
});




//--connecting-modules of js
gulp.task('js', function () {
   return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
   ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/js'))
      .pipe(browserSync.reload({ stream: true }))
})


//--default tasks
gulp.task('default', gulp.parallel('scss', 'css', 'js', 'browser-sync', 'watch'))