// Gulp setup
const gulp = require('gulp')
  ,phpConnect = require('gulp-connect-php')
  ,browserSync = require('browser-sync')
  ,openUrl = require('open')

let connection = new phpConnect();

gulp.task('phpwebserver', () => {

  connection.server({ port: 5500 }, () => { browserSync({

    proxy: '127.0.0.1:5500',
    port: 5500,
    watch: true,
    watchEvents: true,
    open: false,
    cors: {
      "Access-Control-Allow-Origin": "*"
    }

    }) 
  });

  gulp.watch('./**/*.php').on('change', function () {
    browserSync.reload();
  });

  openUrl('localhost:5501/kdashboard.php', {app: {name: 'firefox'}})

});
