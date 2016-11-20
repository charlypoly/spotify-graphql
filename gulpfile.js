var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.release.json');

gulp.task('default', function() {
    var tsResult = tsProject.src()
        .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('src/*.ts', ['default']);
});