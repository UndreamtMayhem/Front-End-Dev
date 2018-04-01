var gulp = require('gulp');

var pug = require('gulp-pug');
var htmlmin = require('gulp-htmlmin');
var htmlhint = require("gulp-htmlhint");

const imagemin = require('gulp-imagemin');

// include sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')
var minifyCSS = require('gulp-csso');
var csslint = require('gulp-csslint');
var csscomb = require('gulp-csscomb');

var jsdoc = require('gulp-jsdoc3');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var pump = require('pump');

var jasmine = require('gulp-jasmine');
var mocha = require('gulp-mocha');

gulp.task('html', function() {
  return gulp.src('project/templates/*.pug').pipe(pug()).pipe(htmlmin({collapseWhitespace: true})).pipe(htmlhint()).pipe(gulp.dest('build/html'))
});
gulp.task('html-validate', function() {
  return gulp.src("build/html/*.html").pipe(htmlhint()).pipe(htmlhint.reporter()).pipe(htmlhint.failAfterError())
});

gulp.task('imagemin', () => gulp.src('project/img/*').pipe(imagemin([
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
  })
], {verbose: true})).pipe(gulp.dest('build/img')));

gulp.task('sass', function() {
  return gulp.src('project/scss/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false})).pipe(csscomb()).pipe(csslint()).pipe(csslint.formatter()).pipe(minifyCSS()).pipe(gulp.dest('build/css'))
});

gulp.task('doc', function(cb) {
  gulp.src([
    'README.md', 'project/js/**/*.js'
  ], {read: false}).pipe(jsdoc(cb));
});

//uglify js
gulp.task('compress', function(cb) {
  pump([
    gulp.src('project/js/*.js'), uglify(), gulp.dest('project/js/min/')
  ], cb);
});

gulp.task('js', function() {
  return gulp.src('project/js/min/*.js').pipe(sourcemaps.init()).pipe(concat('app.min.js')).pipe(sourcemaps.write()).pipe(gulp.dest('build/js'))
});


// TEST
/*
gulp.task('test', function() {
  gulp.src('project/jasmine/spec/feedreader.js')
  // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(jasmine())
});
*/

gulp.task('test', () =>
gulp.src('project/mocha/spec/feedreader.js', {read: false})
// `gulp-mocha` needs filepaths so you can't have any plugins before it
  .pipe(mocha({reporter: 'nyan'}))
);

gulp.task('build', [
  'html',
  'html-validate',
  'imagemin',
  'sass',
  'doc',
  'compress',
  'js',
]);

gulp.task('watch', function() {
  gulp.watch('project/scss/**/*.scss', ['sass']);
});
