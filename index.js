var elixir = require('laravel-elixir');
var gulp = require('gulp');
var install = require('gulp-install');

elixir.extend('install', function(sourceFiles) {

    var Task = elixir.Task;

    new Task('install',function() {

        return gulp.src(sourceFiles)
            .pipe(install());

    });

});