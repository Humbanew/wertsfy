let gulp = require('gulp'),
    devServer = require('gulp-devserver')

gulp.task('server', function() {

  gulp.src('./docs/')
  .pipe(devServer({
      port: 1001,
      livereload: {
        port: 10001,
        clientConsole: true,
        open: true
      },
      proxy: {
        enable: true,
      }
    })
  );

});
