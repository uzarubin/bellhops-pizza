var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');



gulp.task('default', ['js']);

gulp.task('js', function() {
  browserify('./src/js/app.js')
  .transform('reactify')
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./public/javascripts'))
});
