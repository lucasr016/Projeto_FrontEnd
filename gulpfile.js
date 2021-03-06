const elixir = require('laravel-elixir');
    liveReload = require('gulp-liveReload');
    clean = require('gulp-clean');
    gulp = require('gulp');

var config = {
  assets_path:'./resources/assets',
  build_path:'./public'
};

config.bower_path = config.assets_path + '/../bower_components';

config.build_path_js = config.build_path + '/js';
config.build_vendor_path_js = config.build_path_js + '/vendor';
config.vendor_path_js = [
  config.bower_path + 'jquery/dist/jquery.min.js',
];

config.build_path_css = config.build_path + '/css';
config.build_vendor_path_css = config.build_path_css + '/vendor';
config.vendor_path_css = [
  config.bower_path + 'bootstrap/dist/css/bootstrap.min.css',
  config.bower_path + 'bootstrap/dist/css/bootstrap-theme.min.css'
];
//require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
});
