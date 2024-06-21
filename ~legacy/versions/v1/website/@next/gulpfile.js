let gulp = require("gulp")
  ,gulpCopy = require("gulp-copy")
  ,gulpClean = require("gulp-clean")
  ,phpConnect = require('gulp-connect-php')
  ,browserSync = require('browser-sync')
  ,gulpBabel = require('gulp-babel')
  ,gulpConcat = require('gulp-concat')
  ,gulpCssMin = require('gulp-cssmin')
  ,gulpHtmlMin = require('gulp-htmlmin')
  ,gulpJshint = require('gulp-jshint')
  ,gulpPreprocess = require('gulp-preprocess')
  ,gulpSvgMin = require('gulp-svgmin')
  ,gulpUnglify = require('gulp-uglify')
  ,gulpUseMin = require('gulp-usemin')
  ,gulpWebserver = require('gulp-server-livereload');

// Plugins para ver compatibilidade
// let gulp_autoprefixer = require("gulp-autoprefixer");
// let gulp_imagemin = require("gulp-imagemin");
// let gulp_size = require("gulp-size");
// let gulp_gzip = require("gulp-gzip");

  // SERVIDOR LOCAL WEB PHP
let connection = new phpConnect(); 
const url = "default.php";

gulp.task('phpwebserver', () => {

  connection.server({ port: 5500 }, () => { 
    browserSync({
      "proxy": '127.0.0.1:5500',
      "browser": "opera",
      "cors": true,
      "files": ["./**/*.php", "./**/*.css"],
      "open": true,
      "startPath": url
    });
  });

});

  // SERVIDOR LOCAL WEB HTML
gulp.task('webserver', () => {

  let workflow = gulp
    .src("./")
    .pipe(gulpWebserver({
      livereload: true,
      directoryListing: true,
      open: true,
      port: 10050
    }));

});

  // TAREFAS GULP

gulp.task("copy", ()=>{ 

  console.log("\n\x1b[31;1m", "  {GULP COPY} Copiando arquivos entre os diretórios de entrada e saída.", "\x1b[0m\n");

  let workflow = gulp
    .src("./app/**/*")
    .pipe(gulpCopy("./dist", {prefix: 1}))
    .pipe(gulp.dest("./dist"));

  return workflow;

});

gulp.task("clean", ()=>{

  console.log("\n\x1b[31;1m", "  {GULP CLEAN} Limpando pasta de produção para uma nova build.", "\x1b[0m\n");

  let workflow = gulp
    .src("./dist/**/*")
    .pipe(gulpClean());

  return workflow;
});

// gulp.task("autoprefixer", ()=>{

//   console.log("\n\x1b[31;1m", "  {GULP AUTOPREFIXER} Adicionando prefixos de compatibilidade para navegadores antigos.", "\x1b[0m\n");

//   let workflow = gulp
//     .src("./app/**/*.css")
//     .pipe(gulpAutoprefixer({
//       browsers: ['last 20 versions'],
//       cascade: false
//     }))
//     .pipe(gulp.dest("./app"));

//   return workflow;

// }); // Adiciona prefixos de compatibilidade para navegadores antigos

gulp.task("usemin", ()=>{
  console.log("\n\x1b[31;1m", "  {GULP USEMIN} Minificando arquivos HTML, CSS e JavaScript.", "\x1b[0m\n");

  let workflow = gulp
    .src("./app/**/*.html")
    .pipe(gulpUseMin({
      css: [gulpCssMin],
      js: [gulpUnglify, gulpBabel, gulpJshint],
      svg: [gulpSvgMin]
    }))
    .pipe(gulp.dest("./dist"));

  return workflow;
}); // Minifica arquivos HTML, CSS e JavaScript

exports.default = gulp.series("clean", "usemin", "copy");
exports.phpwebserver = gulp.series("phpwebserver");
exports.webserver = gulp.series("webserver");

