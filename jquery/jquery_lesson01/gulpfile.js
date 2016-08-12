var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var frontnote = require("gulp-frontnote");

gulp.task('html', function() {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('img', function() {
    gulp.src('./src/img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('js', function() {
    gulp.src('./src/coffee/*.coffee')
        .pipe(plumber())
        .pipe(coffee())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('./src/coffee/*.coffee', ['js']);
});

gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
        .pipe(frontnote({
            css: '../css/style.css'
        }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./dist/css"));
});

gulp.task('default', ['html', 'img', 'js', 'watch','sass']);
