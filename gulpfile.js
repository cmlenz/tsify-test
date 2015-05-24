var browserify = require('browserify');
var gulp = require('gulp');
var karma = require('karma');
var gutil = require('gulp-util');
var tslint = require('gulp-tslint');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
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

gulp.task('lint', function() {
  gulp.src('./src/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('test', function(done) {
  return karma.server.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  });
});

gulp.task('default', ['build', 'lint', 'test']);
