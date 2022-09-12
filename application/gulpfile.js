// Gulp setup
const GulpClient = require('gulp');
const gulp = require('gulp')
  ,phpConnect = require('gulp-connect-php');

let connection = new phpConnect();

gulp.task('phpserver', () => {
  
  connection.server({
    "port": 5500,
    "open": false,
    "root": "/"
  })

});
