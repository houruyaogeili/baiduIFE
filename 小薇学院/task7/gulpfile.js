const gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    open = require('open');

const config = {
    port: 3001
};

gulp.task('live-server', () => {
    connect.server({
        root: 'dist',
        port: config.port,
        livereload: true
    });
    open('http://localhost:' + config.port);
});

gulp.task('html',() => {
    gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('javascript',() => {
    gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('images',() => {
    gulp.src('./src/images/*.{png,jpg,gif,ico}')
    .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('fonts',() => {
    gulp.src('./src/fonts/*.{svg,ttf,woff}')
    .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest('./dist/fonts'));
});


gulp.task('live-reload', () => {
    gulp.src('./dist/**/*.*')
        .pipe(connect.reload());
});

gulp.task('sass', () => {
    gulp.src('./src/sass/style.scss')
        .pipe(plumber())
        .pipe(sass({'outputStyle':'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/js/*.js', ['javascript']);
    gulp.watch('./src/images/*.{png,jpg,gif,ico}', ['images']);
    gulp.watch('./src/fonts/*.{svg,ttf,woff}', ['fonts']);
    gulp.watch('./dist/**/*.*', ['live-reload']);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', [
    'live-server',
    'html',
    'javascript',
    'images',
    'fonts',
    'sass',
    'watch'
]);
