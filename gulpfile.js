var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    stylus      = require('gulp-stylus'),
    prefix      = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify'),
    minifyCSS   = require('gulp-minify-css'),
    useref      = require('gulp-useref'),
    assets      = useref.assets(),
    gulpif      = require('gulp-if'),
    clean       = require('gulp-clean'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

var PATHS = {
    jade: {
        watch: 'src/jade/*.jade',
        all: 'src/jade/**/*.jade'
    },
    stylus: {
        watch: 'src/stylus/style.styl',
        all: 'src/stylus/**/*.styl'
    },
    scripts: {
        init: 'src/scripts/init.js',
        plugins: 'src/scripts/plugins/*.js'
    },
    bootstrap: {
        fonts: 'node_modules/bootstrap-styl/fonts/**/*.*',
        js: 'node_modules/bootstrap-styl/js/*.js'
    },
    src: 'src',
    build: 'build',
    deploy: {
        html: 'src/*.html',
        img: 'src/assets/img/**/*.*',
    }
};


/* ================================ */
/* ===== DEVELOPMENT TASKS ======= */
/* ============================== */


/* ===== JADE ======= */

gulp.task('jade', function () {

    return gulp.src(PATHS.jade.watch)
        .pipe(sourcemaps.init())
        .pipe(jade({
            pretty: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.src))
});

gulp.task('jade-watch', ['jade'], reload);


/* ===== STYLES ===== */

gulp.task('stylus', function () {
    gulp.src(PATHS.stylus.watch)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.src + '/assets/css'))
        .pipe(reload({stream: true}));
});


/* ===== COPY ======= */

gulp.task('copy', function () {
    gulp.src(PATHS.bootstrap.fonts)
        .pipe(gulp.dest(PATHS.src + '/assets/fonts'))

    gulp.src(PATHS.bootstrap.js)
        .pipe(gulp.dest(PATHS.src + '/scripts/bootstrap'))   
});


/* ========================= */
/* ===== DEFAULT TASK ===== */
/* ======================= */

gulp.task('default', ['jade', 'stylus', 'copy'], function() {
    browserSync({ server: { baseDir: './src' } });
    gulp.watch(PATHS.stylus.all, ['stylus'])
    gulp.watch(PATHS.jade.all, ['jade-watch']);
    gulp.watch(PATHS.scripts.init, reload);
});


/* ============================== */
/* ===== DEPLOYMENT TASKS ====== */
/* ============================ */

gulp.task('deployClean', function () {
  return gulp.src(PATHS.build, {read: false})
    .pipe(clean());
});

gulp.task('deployHTML', ['deployClean'], function() {
    return gulp.src(PATHS.deploy.html)
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCSS()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest(PATHS.build));
});

gulp.task('deployAssets', ['deployHTML'], function() {
    gulp.src(PATHS.deploy.img)
        .pipe(gulp.dest(PATHS.build + '/assets/img'))

     gulp.src(PATHS.bootstrap.fonts)
        .pipe(gulp.dest(PATHS.build + '/assets/fonts'))
});

gulp.task('build', ['deployAssets']);