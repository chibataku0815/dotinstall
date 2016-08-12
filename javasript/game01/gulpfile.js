var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('html', function() {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});


gulp.task('js', function() {
    gulp.src('./src/coffee/*.coffee')
        .pipe(coffee())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// 画像圧縮処理
gulp.task('img', function() {
    gulp.src('./src/img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});



gulp.task('watch', function() {
    gulp.watch('./src/coffee/*.coffee', ['js']);
});

gulp.task('default', ['html', 'img' , 'js', 'watch']);
