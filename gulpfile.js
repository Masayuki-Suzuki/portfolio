const gulp        = require("gulp"),
     sass         = require("gulp-sass"),
     uglify       = require("gulp-uglify"),
     imagemin     = require('gulp-imagemin'),
     plumber      = require('gulp-plumber'),
     nodemon      = require('gulp-nodemon'),
     notify       = require('gulp-notify'),
     //postcss      = require('gulp-postcss'),
     //cssnext      = require('postcss-cssnext'),
     //autoprefixer = require('autoprefixer'),
     //flexibility  = require('postcss-flexibility');
     eslint       = require('gulp-eslint'),
     browserSync  = require('browser-sync');

const webpackStream = require("webpack-stream"),
      webpack = require("webpack"),
      webpackConfig = require("./webpack.config");

//Variables
//reload    = browserSync.reload;
const source    = ["public/**/*"],
      js        = "assets/js/*.js",
      ImgPath   = "public/dist/img",
      builtCss  = "assets/build/sass",
      distJs    = "public/dist/js",
      vuePath   = "src/**/*.vue";

gulp.task("sass", function() {
  //var processors = [
    //cssnext({browsers: ['last 2 version']}),
    //mqpacker(),
    //autoprefixer(),
    //flexibility()
  //];
  gulp.src("assets/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    //.pipe(postcss(processors))
    .pipe(gulp.dest(builtCss))
    .pipe(notify('SASS task has already done!!'));
});

gulp.task("webpackJs",function(){
  return gulp
    .src(js)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("assets/bundle"))
    .pipe(notify('Webpack has already done!!'));
});

gulp.task("webpackVue",function(){
  return gulp
    .src(vuePath)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("assets/bundle"))
    .pipe(notify('Webpack has already done!!'));
});

gulp.task("webpackMain",function(){
  return gulp
    .src("src/*.js")
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("assets/bundle"))
    .pipe(notify('Webpack has already done!!'));
});

gulp.task("webpackCss",function(){
  return gulp
    .src(["assets/build/sass/*.css"])
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("assets/bundle"))
    .pipe(notify('Webpack has already done!!'));
});

//Minify bundle.js
gulp.task("uglify", function() {
  gulp.src(["assets/bundle/*.js"])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(distJs))
    .pipe(notify('uglify has already done!!'));
});

gulp.task("imagemin", function() {
  gulp.src("assets/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest(ImgPath))
    .pipe(notify('Image Compression has already done!!'));
});

function reload() {
  browserSync.reload();
};

gulp.task('server',['browserSync'],function() {
  nodemon({
    script: 'app.js',
    ext: 'js html sass',
    ignore: [
      'node_modules',
      'bin',
      'views',
      'public',
      'test'
    ],
    env: {
      NODE_ENV: 'development'
    },
    stdout: false  // Express の再起動時のログを監視するため
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if (/^SERVER\ HAS\ STARTED!!/.test(chunk)) {
        // Express の再起動が完了したら、reload() でBrowserSync に通知。
        // ※Express で出力する起動時のメッセージに合わせて比較文字列は修正
        reload();
      }
      process.stdout.write(chunk);
    });
    this.stderr.on('data', function(chunk) {
      process.stderr.write(chunk);
    });
  });
});

gulp.task('browserSync', function () {
  browserSync.init({
    files: ['public/**/*.*', 'views/**/*.*'],
    proxy: "http://localhost:3000",
    port : "4000",
    open: false,
    notify: false
  });
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch(js,['webpackJs']);
  gulp.watch('assets/build/sass/*.css',['webpackCss']);
  gulp.watch('assets/bundle/bundle.js', ['uglify']);
  gulp.watch('assets/img/**/*', ['imagemin']);
  gulp.watch('src/**/*.vue', ['webpackVue']);
  gulp.watch('src/**/*.js',['webpackMain']);
  gulp.watch(source, reload);
});

gulp.task("default", ["server"]);
