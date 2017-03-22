var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./source/css/goldfish.sass')
        // .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass())
        .pipe(gulp.dest('./source/css'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./source/css/*.sass', ['sass']);
});