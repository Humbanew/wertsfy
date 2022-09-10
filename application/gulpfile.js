const gulp = require('gulp')
  ,devServer = require('gulp-devserver')
  ,phpConnect = require('gulp-connect-php')
  ,browserSync = require('browser-sync');

let connection = new phpConnect();

gulp.task('phpserver', () => {
 
  connection.server({
    "port": 5500,
    "base": "./",
    "open": false
  }, () => { browserSync({

    files: ["kambler-dashboard.php", "gulpfile.js"],
    proxy: "127.0.0.1:5500",
    watch: true,

    }) 
  });

});
