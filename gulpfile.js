var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  var b = browserify({
    debug: true,
    entries: ['./src/index.ts'],
    standalone: 'Test'
  }).plugin('tsify', {target: 'ES5', stopOnError: false});

  return b.bundle()
    .on('error', function(error) {
      gutil.log(error.message);
    })
    .pipe(source('test.js'))
    .pipe(gulp.dest('./dist'));
});
