/**
 * Created by Dmitry Masley on 6/1/16.
 */
var gulp = require("gulp");
var less = require("gulp-less");
var minifycss = require("gulp-clean-css");
var shell = require("gulp-shell");
var sourcemaps = require("gulp-sourcemaps");
var exec = require('child_process').exec;
var webpack = require('webpack-stream');
var webpackConfig = require("./webpack.config.js");


gulp.task("build", function(){
    "use strict";
    gulp.src("public/src/js/main.jsx")
        .pipe(webpack(webpackConfig))
        .on('error', function(error) {
            this.emit('end'); // prevent watch to stop on build error
        })
        .pipe(gulp.dest("public/build/js/"));
});
gulp.task('watch', function() {
    gulp.watch("public/src/**/*", ['build']);
});
//
//gulp.task("copy_fonts", function(){
//    console.log("copy fonts");
//    return gulp.src(["src/less/fonts/**/*", "src/less/bootstrap/fonts/**/*", "src/less/font-awesome/fonts/**/*"]).pipe(gulp.dest("build/fonts"));
//});
//gulp.task("copy_images", function(done){
//    console.log("copy images");
//    gulp.src(["src/less/img/**/*"]).pipe(gulp.dest("build/css/img")).on("end", function(){
//        gulp.src(["src/less/chosen/*.png"]).pipe(gulp.dest("build/css/chosen")).on("end", function(){
//            done();
//        });
//    });
//});
//gulp.task("less", ["copy_fonts", "copy_images"], function(){
//    console.log("compile main.less");
//    return gulp.src(["src/less/main.less"])
//        .pipe(sourcemaps.init())
//        .pipe(less())
//        .pipe(minifycss())
//        .pipe(sourcemaps.write())
//        .pipe(gulp.dest("build/css"));
//});
//gulp.task("build_scripts", function(cb){
//    exec("node ./tools/r.js -o ./tools/build.json", function (err, stdout, stderr) {
//        console.log(stdout);
//        console.log(stderr);
//        cb(err);
//    });
//});
//gulp.task("deploy", function(){
//    console.log("Deploy to: " + process.env.ONDEMAND_TOMCAT_HOME + "/webapps/ROOT");
//    gulp.src(["build/**/*"]).pipe(gulp.dest(process.env.ONDEMAND_TOMCAT_HOME+"/webapps/ROOT/build"));
//});
//gulp.task('watch', function() {
//    gulp.watch("src/less/**/*", ['deploy_less']);
//    gulp.watch("src/js/**/*", ['deploy_scripts']);
//});
//gulp.task("deploy_less", ["less"], function(){
//    console.log("Deploy styles to: " + process.env.ONDEMAND_TOMCAT_HOME + "/webapps/ROOT/build/css");
//    gulp.src(["build/css/**/*"]).pipe(gulp.dest(process.env.ONDEMAND_TOMCAT_HOME+"/webapps/ROOT/build/css"));
//
//
//    console.log("Deploy fonts to: " + process.env.ONDEMAND_TOMCAT_HOME + "/webapps/ROOT/build/fonts");
//    gulp.src(["build/fonts/**/*"]).pipe(gulp.dest(process.env.ONDEMAND_TOMCAT_HOME+"/webapps/ROOT/build/fonts"));
//});
//gulp.task("deploy_scripts", ["build_scripts"], function(){
//    console.log("Deploy scripts to: " + process.env.ONDEMAND_TOMCAT_HOME + "/webapps/ROOT/build/js");
//    gulp.src(["build/js/**/*"]).pipe(gulp.dest(process.env.ONDEMAND_TOMCAT_HOME+"/webapps/ROOT/build/js"));
//});
//gulp.task("build", ["less", "build_scripts"]);
gulp.task("default", ["build"]);