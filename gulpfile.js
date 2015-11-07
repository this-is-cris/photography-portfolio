
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon')
    minifyCSS = require('gulp-minify-css');


var stylePaths = {
  src: './client/styles/main.scss',
  watch: './client/styles/**/*.scss',
  dest: './public/styles/'
};

gulp.task('compile:scss', function() {
  gulp.src(stylePaths.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCSS({
        keepBreaks: false
      }))
      .pipe(gulp.dest(stylePaths.dest));
});

gulp.task('start', function() {
  nodemon({
    script: 'keystone.js',
    ext: 'js html',
    ignore: [
      'client/*',
      'public/*',
      '.git',
      'node_modules/**/node_modules'
    ]
  });
});

gulp.task('default', ['compile:scss'], function() {
  gulp.watch(stylePaths.watch, ['compile:scss']);
});
