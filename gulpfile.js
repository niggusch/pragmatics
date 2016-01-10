
/**
 *
 * Gulpfile setup
 * @see https://github.com/synapticism/wordpress-gulp-starter-kit
 * @see https://ahmadawais.com/my-advanced-gulp-workflow-for-wordpress-themes/
 * @see http://mattbanks.me/wordpress-drupal-starter-themes-grunt/
 * @see SiplisticToDoGulp
 * @see https://github.com/synapticism/wordpress-gulp-starter-kit
 * @see http://mattbanks.me/gulp-wordpress-development/
 * @since 1.0.0
 * @authors Nicolas Schwarzentrub
 * @package pragmatics
 * @forks
 */


'use strict';

var project 		   = 'pragmatics', // Project name, used for build zip.
	url 			       = 'pragmatics.dev', // Local Development URL for BrowserSync. Change as-needed.
	bower 			     = './assets/bower_components/', // Not truly using this yet, more or less playing right now. TO-DO Place in Dev branch
  node 						 = './node_modules/',
  build 			     = './build/', // Files that you want to package into a zip go here
	buildInclude 	  = [
	        						// include common file types
	        						'**/*.php',
	        						'**/*.html',
	        						'**/*.css',
	        						'**/*.js',
	        						'**/*.svg',
	        						'**/*.ttf',
	        						'**/*.otf',
	        						'**/*.eot',
	        						'**/*.woff',
	        						'**/*.woff2',

	        						// include specific files and folders
	        						'screenshot.png',

	        						// exclude files and folders
	        						'!node_modules/**/*',
	        						'!assets/bower_components/**/*',
	        						'!style.css.map',
	        						'!assets/js/custom/*',
	        						'!assets/css/patrials/*'

					           ];

//Load Plugins
var gulp        = require('gulp'),
    $$          = require('gulp-load-plugins')
                        ({
                          lazy: true,
                          pattern: ['gulp-*', 'gulp.*','del','path']
                          }
                        );


var assetPath   = $$.path.resolve('./assets/*'),
    jsPath      = $$.path.resolve('./app/*'),
    vendorPath  = $$.path.resolve('./vendor/'),
		bowerPath   = $$.path.resolve(bower),
    cssPath     = $$.path.resolve('./assets/style/source/*');


var jsFilter    = $$.filter(['**/*.js'],{restore: true}),
		jsNoMinFilter    = $$.filter(['**/*.js','!**/*min.js','!**/*npm.js','!**/*index.js'],{restore: true}),
    cssFilter   = $$.filter(['**/*.css'],{restore: true}),
    phpFilter   = $$.filter('**/*.php',{restore: true})
		;

// Dependencies are run in parallel, so an error in analyze does not stop the build
gulp.task('default', ['analyze', 'css', 'js', 'vendorsJs']);

gulp.task('clean', function (cb) {
    $$.del(['dist/*'], cb);
});

gulp.task('analyze', function () {
    $$.util.log('Analyzing sources in ' + jsPath);

    return gulp.src([jsPath])
      .pipe($$.filter('**/*.js')) // Filtering stream to only css files
        .pipe($$.jshint())
        .pipe($$.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($$.jshint.reporter('fail'));
});

//Minify and uglify CSS
gulp.task('css', function () {

  $$.util.log('Minify css in ' + cssPath);

  return gulp.src([cssPath])
    .pipe(cssFilter) // Filtering stream to only css files
    .pipe($$.uglifycss({
      "max-line-len": 80
    }))
    .pipe($$.rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/css'))
    .pipe($$.notify({ message: 'CSS task complete' }));
});

//Minify and uglify JS
gulp.task('js', function() {

  $$.util.log('Uglify javascript sources in ' + jsPath);
    return 	gulp.src([jsPath])
          .pipe(jsFilter) // Filtering stream to only css files
  				.pipe($$.concat(project+'.js'))
  				.pipe(gulp.dest('./dist/js'))
  				.pipe($$.rename( {
  					basename: project,
  					suffix: '.min'
  				}))
  				.pipe($$.uglify())
  			  .pipe(gulp.dest('./dist/js'))
  				.pipe($$.notify({ message: 'js task complete', onLast: true }));


});

gulp.task('vendorsJs', function() {
  //TODO include vednor stuff: use bower for package management



	var jqueryPath  					= $$.path.resolve(bowerPath+'/jquery/dist/*'),
			bootstrapJsPath  			= $$.path.resolve(bowerPath+'/bootstrap/dist/js/*'),
			angularPath  					= $$.path.resolve(bowerPath+'/angular/*'),
			angularUiRouter   		= $$.path.resolve(bowerPath+'/angular-ui-router/release/*'),
			angularSanitizePath  	= $$.path.resolve(bowerPath+'/angular-sanitize/*');


	$$.util.log('Uglify jquery javascript sources in ' + jqueryPath);
	$$.util.log('Uglify bootstrap javascript sources in ' + bootstrapJsPath);

	return 	gulp.src([jqueryPath,bootstrapJsPath, angularPath, angularUiRouter, angularSanitizePath])
        .pipe(jsNoMinFilter) // Filtering stream to only css files
			  .pipe($$.debug({title: 'After filter Files: '}))
				.pipe($$.rename( {
					suffix: '.min'
				}))
				  .pipe($$.debug({title: '3 Processed output File: '}))
				.pipe($$.uglify())
				.pipe(gulp.dest('./dist/js'))
				.pipe($$.notify({ message: 'Vendor scripts task complete', onLast: true }));
});



gulp.task('release', function(){

    $$.util.log('Release with Assetspaht ' + assetPath);


    return gulp.src(assetPath)
        .pipe(phpFilter)
        .pipe($$.debug({title: 'Asset Files:'}))

        .pipe($$.useref())
				/*
        .pipe(jsFilter)
        .pipe($$.uglify())
        .pipe(cssFilter)
        .pipe($$.uglifycss())
        .pipe($$.debug({title: 'CSS Files:'}))

        .pipe(jsFilter)
        .pipe($$.uglify())             // Minify all javascript sources
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe($$.minifyCss())          // Minify CSS sources
        .pipe(cssFilter.restore)
        .pipe($$.rev())                // Rename the concatenated files with a hash-prefix
        .pipe($$.useref())             // Replace the original references in the html with the concatenated and processed resources by usemin
        .pipe($$.revReplace())         // Replace the usemin generated resources with the reved resources
        .pipe(htmlFilter)
        .pipe($$.htmlmin({removeComments: true}))  // Remove comments from html
        .pipe(htmlFilter.restore)
        .pipe($$.debug({title: 'Processed output File: '}))
        */
        .pipe(gulp.dest('./dist/'))
				.pipe($$.notify({ message: 'Vendor scripts task complete', onLast: true }));
});
