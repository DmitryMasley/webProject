"use strict";
/**
 * Created by Dmitry Masley on 6/1/16.
 */
var gulp = require("gulp");
var less = require("gulp-less");
var minifycss = require("gulp-clean-css");
var shell = require("gulp-shell");
var sourcemaps = require("gulp-sourcemaps");
var exec = require('child_process').exec;
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
let sass = require("gulp-sass");

gulp.task("build", function(){
    "use strict";
    return gulp.src("public/src/js/main.jsx")
        .pipe(webpackStream(webpackConfig), webpack)
        .on('error', function(error) {
            this.emit('end'); // prevent watch to stop on build error
        })
        .pipe(gulp.dest("public/build/js/"));
});
gulp.task('watch', function() {
    return gulp.src("public/src/js/main.jsx")
        .pipe(webpackStream(Object.assign(webpackConfig, {watch: true})), webpack)
        .on('error', function(error) {
            this.emit('end'); // prevent watch to stop on build error
        })
        .pipe(gulp.dest("public/build/js/"));
});
gulp.task("sass", ()=>{
    return gulp.src("public/src/sass/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("public/build/css/"))
});
gulp.task("default", ["build"]);