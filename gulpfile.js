var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    stylus      = require('gulp-stylus'),
    minifyCss   = require('gulp-minify-css'),
    autoprefixer= require('gulp-autoprefixer');
    //plumber     = require('gulp-plumber');
    //gulp-imagemin

var jsSrcPath   = 'app/public/src-js/*.js',
    jsDestPath  = 'app/public/js',
    cssSrcPath  = 'app/public/src-css/*',
    cssDestPath = 'app/public/css';

/**
 * Scripts Task - Modifies the css files.
 */
gulp.task( 'scripts', function(){
	gulp.src( jsSrcPath )
		//.pipe( plumber() )					// happens before other pipes.
		.pipe( uglify() )
		.pipe( gulp.dest( jsDestPath ) );
});

/**
 * Styles Task - Modifies the css files.
 */
gulp.task( 'styles', function(){
	gulp.src( cssSrcPath )
		//.pipe( plumber() )					// happens before other pipes.
		.pipe( stylus({
			compress: false
		}) )
		.pipe( autoprefixer( 'live 2 versions' ) )
		.pipe( gulp.dest( cssDestPath ) );
});

// Watch Task.
gulp.task( 'watch', function(){
	gulp.watch( jsSrcPath, [ 'scripts' ] ); // path, tasks to run.
	gulp.watch( cssSrcPath, [ 'styles' ] ); // path, tasks to run.
});


gulp.task( 'default', [ 'scripts', 'styles', 'watch' ] );