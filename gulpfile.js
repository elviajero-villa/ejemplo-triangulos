
const SCRIPTS_DIR = 'resources/assets/js';
const STYLES_DIR = 'resources/assets/sass';

const gulp = require('gulp'),
	 sass = require('gulp-sass'),
	 autoprefixer = require('gulp-autoprefixer'),
	 browserify = require('gulp-browserify'),
	 jshint = require('gulp-jshint'),
   stylish = require('jshint-stylish'),
   uglify = require('gulp-uglify'),
   rename = require('gulp-rename');



gulp.task('js', function () {
    gulp.src(SCRIPTS_DIR+'/app.js')
        .pipe(browserify())
        .pipe(rename('/app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));

})

gulp.task('sass', () => {
  return gulp.src(STYLES_DIR+'/app.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer('last 10 versions'))
    .pipe(gulp.dest('./public/css'));
});

// Watch files for changes
gulp.task('default', ()=> {
	gulp.watch(SCRIPTS_DIR+'/**/*.js', ['js']);
	gulp.watch(STYLES_DIR+'/**/*.scss', ['sass']);
});