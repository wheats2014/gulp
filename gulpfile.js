const gulp = require('gulp');
const babel = require('gulp-babel');
const gulpBrowser = require("gulp-browser");
const header = require('gulp-header');
const uglify = require('gulp-uglify');
const less = require('gulp-less');

// 添加浏览器前缀
const autoprefixer = require('gulp-autoprefixer');

const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');
const notify = require('gulp-notify');

let pkg = require('./package.json');
let banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

gulp.task('js-uglify', () => {
  return gulp.src('static/javascripts/src/**/*.js')
      .pipe(babel({
        plugins : [
          "transform-regenerator",
          'transform-runtime'
        ]
      })) // regeneratorRuntime undefined
      .pipe(gulpBrowser.browserify(
          [ {transform : "babelify", options : {presets : [ "es2015" ]}} ]))
      .pipe(uglify())
      .pipe(header(banner, {pkg : pkg}))
      .pipe(rename({suffix : '.min'}))
      .pipe(gulp.dest('static/javascripts/dist'));
});

gulp.task('less', () => {
  return gulp.src('static/less/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('static/css/src'));
});

gulp.task('css-minify', () => {
  return gulp.src('static/css/src/**/*.css')
      .pipe(autoprefixer({browsers : [ 'last 5 versions' ], cascade : false}))
      .pipe(minifyCSS())
      .pipe(header(banner, {pkg : pkg}))
      .pipe(rename({suffix : '.min'}))
      .pipe(gulp.dest('static/css/dist'));
  //.pipe(notify({message : 'css  编译完成！'}));
});
//
// gulp.task('watch-js', () => {
//   gulp.watch('static/javascripts/src/**/*.js', [ 'js-uglify' ]);
// });
//
// gulp.task('watch-css',
//           () => { gulp.watch('static/css/src/**/*.css', [ 'css-minify' ]);
//           });

gulp.task('default', [ 'less', 'css-minify', 'js-uglify' ]);
