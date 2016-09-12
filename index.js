var elixir = require('laravel-elixir');
var gulp = require('gulp');
var install = require('gulp-install');

elixir.extend('npm-install', function(src, options) {

    var Task = elixir.Task;

    new Task('npm-install',function() {

        return gulp.src(['./package.json'])
            .pipe(install());

    });

});