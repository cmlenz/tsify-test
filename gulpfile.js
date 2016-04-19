var browserify = require('browserify');
var gulp = require('gulp');
var karma = require('karma');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var tslint = require('gulp-tslint');
var tsify = require('tsify');

gulp.task('build', function() {
  return browserify('src/index.ts', 'typings/browser.d.ts', {debug: true})
    .plugin(tsify, {stopOnError: false})
    .bundle()
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
  var server = new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function() {
    done();
  });
  server.start();
});

gulp.task('default', ['build', 'lint', 'test']);
