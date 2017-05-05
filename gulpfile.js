const gulp = require('gulp');
const babel = require('gulp-babel');
const gulpBrowser = require("gulp-browser");
const header = require('gulp-header');
const uglify = require('gulp-uglify');

var pkg = require('./package.json');
var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

gulp.src('./foo/*.js')
    .pipe(header(banner, {pkg : pkg}))
    .pipe(gulp.dest('./dist/'))

        gulp.task('es6-es5', () => {
          return gulp.src('static/javascripts/src/**/*.js')
              .pipe(gulpBrowser.browserify([
                {transform : "babelify", options : {presets : [ "es2015" ]}}
              ]))
              .pipe(uglify())
              .pipe(header(banner, {pkg : pkg}))
              .pipe(gulp.dest('static/javascripts/dist'));
        });

gulp.task('default', [ 'es6-es5' ]);
