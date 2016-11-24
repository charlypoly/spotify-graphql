const gulp = require('gulp');
const ts = require('gulp-typescript');
const jasmine = require('gulp-jasmine');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const tsProject = ts.createProject('tsconfig.release.json');

gulp.task('build', function() {
    var tsResult = tsProject.src()
        .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

gulp.task('test:run', function() {
    return gulp.src('build/spec/**')
      .pipe(jasmine())
});

gulp.task('watch', ['default'], function() {
    gulp.watch('src/*.ts', ['default']);
    gulp.watch('examples/*.ts', ['default']);
});

gulp.task('test', [], function(cb) {
  runSequence('clean', 'build', 'test:run', cb);
});
gulp.task('default', ['build']);
