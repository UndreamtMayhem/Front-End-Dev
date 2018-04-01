var gulp = require('gulp');

// HTML task
var pug = require('gulp-pug');
var htmlmin = require('gulp-htmlmin');
var htmlhint = require("gulp-htmlhint");

// Style Task
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')
var minifyCSS = require('gulp-csso');
var csslint = require('gulp-csslint');
var csscomb = require('gulp-csscomb');

// Responsive Image Task
const imagemin = require('gulp-imagemin');


// Javascript Task
var jsdoc = require('gulp-jsdoc3');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var pump = require('pump');

// Test Task
var jasmine = require('gulp-jasmine');
var mocha = require('gulp-mocha');

// HTML TASK
gulp.task('build-html', function() {
  return gulp.src('project/templates/*.pug')
    .pipe(pug())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/views'))
});

// HTML Validation TASK
gulp.task('html-validate', function() {
  return gulp.src("build/html/*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failAfterError())
});

// style TASK
gulp.task('style', function() {
  return gulp.src('project/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer([
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 20',
    'Firefox >= 24', // Firefox 24 is the latest ESR 
    'Explorer >= 8',
    'iOS >= 6',
    'Opera >= 12',
    'Safari >= 6']))
  .pipe(csscomb())
  .pipe(csslint())
  .pipe(csslint.formatter())
  .pipe(minifyCSS())
  .pipe(gulp.dest('build/css'))
});


// Responsive images
gulp.task('imagemin', () => 
  gulp.src('project/img/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: true
            }, {
              cleanupIDs: false
            }
        ]
      })], 
      {verbose: true}))
    .pipe(gulp.dest('build/img')
));

// JS Documentation Task
gulp.task('doc', function(cb) {
  gulp.src([
    'README.md', 'project/js/**/*.js'
  ], {read: false}).pipe(jsdoc(cb));
});

// Compress and uglify js files Task
gulp.task('compress', function(cb) {
  pump([
    gulp.src('project/js/*.js'), 
    uglify(), 
    gulp.dest('project/js/min/')
  ], cb);
});

// Build js Task
gulp.task('js', function() {
  return gulp.src('project/js/min/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('app.min.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('build/js'))
});


// Jasmine TEST Task
gulp.task('jasmine-tests', function() {
  gulp.src('project/jasmine/spec/feedreader.js')
    .pipe(jasmine())
});

// Mocha TEST Task
gulp.task('mocha-test', () =>
  gulp.src('project/mocha/spec/feedreader.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
);

gulp.task('build', [
  'build-html',
  'html-validate',
  'imagemin',
  'style',
  'doc',
  'compress',
  'js',
]);

gulp.task('test', [
  'jasmine-tests',
  'mocha-test'
]);

gulp.task('watch', function() {
  gulp.watch('project/scss/**/*.scss', ['sass']);
});