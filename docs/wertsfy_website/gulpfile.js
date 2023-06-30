// Gulp setup
const gulp = require('gulp'), webserver = require('gulp-webserver'), CORS = require('cors');

gulp.task('webserver', () => {
  gulp.src('.')
    .pipe(webserver({
      
      host: 'localhost',
      port: 7070,
      livereload: true,     
      directoryListing: true,
      open: true,
      fallback: './index.html',

    }));

  gulp.watch('.').on('change', () => {
    
    console.log(
      "\x1B[31m[" + 
      new Date().toISOString() + 
      " \/\/ " + 
      new Date().toLocaleTimeString() + 
      "]\x1B[0m" + 
      " Changed Files. "
    )

  });

});
