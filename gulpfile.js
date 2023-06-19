const  gulp = require('gulp'),
       concat = require('gulp-concat'),
       prefix = require('gulp-autoprefixer'),
       sass = require('gulp-sass')(require('sass')),
       sourcemaps = require('gulp-sourcemaps'),
       notify = require("gulp-notify");

gulp.task('QR-code-css', function () {
    return gulp.src('project/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix({cascade: false}))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/style'))
        .pipe(notify('sass style is done'))
});

//watch task
gulp.task('watch', function () {
    gulp.watch('project/sass/**/*.scss', gulp.series('QR-code-css'));
})
gulp.task('default', gulp.parallel('watch'));
