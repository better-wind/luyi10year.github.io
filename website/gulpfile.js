var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    path = {
        src:'./dev/',
        dist:'./dist/',
        vm:'./'
    };
gulp.task('clean',function(){
    return gulp.src([path.dist],{read:false}).pipe(clean({force:true}))
})
gulp.task('image',function(){
    return gulp.src([path.src+'image/**/*.{png,jpg}'])
        .pipe(gulp.dest(path.dist+'/image'));
})
gulp.task('font',function(){
    return gulp.src([path.src+'font/**/*.{woff,woff2}'])
        .pipe(gulp.dest(path.dist+'/font'));
})
gulp.task('js',function(){
    var task = {
        indexJs:gulp.src([path.src+'js/**/*.js'])
            // .pipe(concat('index.js'))
            .pipe(plumber())
            .pipe(babel({presets: ['es2015']}))
            .pipe(gulp.dest(path.dist+'/js'))
            .pipe(uglify())
            .pipe(rename({extname:'.min.js'}))
            .pipe(rev())
            .pipe(gulp.dest(path.dist+'/js'))
            .pipe(rev.manifest())
            .pipe(gulp.dest(path.src+'/rev/js'))
    }
    return task;
})
gulp.task('style',function(){
    var task = {
        indexStyle:gulp.src([path.src+'style/**/*.{scss,css}'])
            .pipe(sass({outputStyle:'expanded'}))
            .pipe(gulp.dest(path.dist+'/style'))
            .pipe(minifycss())
            .pipe(rename({ extname: '.min.css' }))
            .pipe(rev())
            .pipe(gulp.dest(path.dist+'/style'))
            .pipe(rev.manifest())
            .pipe(gulp.dest(path.src+'/rev/css'))
    }
})
gulp.task('rev', function() {
    gulp.src([path.src+'/rev/**/*.json', path.vm+'/html/index.html'])
        .pipe(revCollector({
            replaceReved: true,
        }))
        .pipe(gulp.dest(path.vm+'/html'));
});
gulp.task('watch',function(){
    gulp.watch([path.src+'/js/**/*.js',path.src+'/style/**/*.{scss,css}'],['default'])
})
gulp.task('default',['clean'],function(){
    gulp.start(['style','js','font','image'],'rev');
})