var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var imageResize = require('gulp-image-resize');

gulp.task('css', function(){

	gulp.src([
		'css/basics.css',
		'css/footer.css',
		'css/foundation.css',
		'css/hero.css',
		'css/menu.css',
		'css/modals.css',
		'css/normalize.css',
		'css/photo-grid.css'
		])

	.pipe(concat('min.css'))
	.pipe(cssMin())
	.pipe(gulp.dest('css'));
});

gulp.task('scripts', function(){
	gulp.src([
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js',
		'js/jquery.js',
		'js/scripts.js'
		])

	.pipe(concat('min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js'));

});



gulp.task('default', ['css', 'scripts']);

