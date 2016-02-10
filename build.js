var metalsmith		= require('metalsmith');
var define			= require('metalsmith-define');
var layout			= require('metalsmith-layouts');
var collections		= require('metalsmith-collections');
var pagination		= require('metalsmith-pagination');
var markdown		= require('metalsmith-markdown');
var images			= require('metalsmith-project-images');
var permalinks		= require('metalsmith-permalinks');
var autoprefixer	= require('metalsmith-autoprefixer');
var sass			= require('metalsmith-sass');
var uglify			= require('metalsmith-uglify');
var concat			= require('metalsmith-concat');
var updated			= require('metalsmith-updated');
var asset			= require('metalsmith-static');
var serve			= require('metalsmith-serve');
var watch			= require('metalsmith-watch');

metalsmith(__dirname)
	.source('src')
	.use(define({
		blog: {
			uri: 'http://edwardessing.com',
			title: 'EDES',
			description: 'EDES'
		},
		owner: {
			uri: 'http://edwardessing.com',
			name: 'Edward Essing'
		},
		moment: require('moment')
	}))
	.use(asset({
		src: 'assets', // relative to the working directory
		dest: 'assets' // relative to the build directory
	}))
	.use(images({
		pattern: 'projects/**/*.md',
		imagesDirectory: 'images'
	}))
	.use(collections({
		pages: {
			pattern: '*.md',
			refer: false
		},
		projects: {
			pattern: 'projects/**/*.md',
			sortBy: 'date',
			reverse: true
		}
		// recentWork: {
		// 	pattern: 'work/*.md',
		// 	sortBy: 'number',
		// 	reverse: true,
		// 	limit: 6
		// }
	}))
	// .use(pagination({
	// 	'collections.works': {
	// 		// perPage: 6,
	// 		first: 'index.html',
	// 		layout: 'work.jade',
	// 		path: 'work/:num/index.html',
	// 		noPageOne: true,
	// 		pageMetadata: {

	// 		}
	// 	}
	// }))
	.use(markdown({
		'gfm': true,
		'tables': true
	}))
	.use(permalinks({
		relative: true,
		pattern: './projects/:title'
	}))
	.use(sass({
		outputDir: function(originalPath) {
			return originalPath.replace('scss', 'css');
		}
	}))
	.use(autoprefixer())
	.use(uglify({
		order: ['js/jquery.min.js', 'js/*.js'],
		concat: 'js/script.min.js',
		removeOriginal: true,
		filter: 'js/*.js',
	}))
	.use(layout({
		engine: 'jade',
		directory: 'layouts',
		partials: 'partials',
		default: 'project.jade',
		pattern: '**/*.html'
	}))
	.use(serve({
		port: 8080,
		http_error_files: {
			404: "/404.html"
		}
	}))
	.use(watch({
		paths: {
			'src/**/*': true,
			'layouts/**/*': '**/*.md',
		},
		livereload: true
	}))
	.destination("build")
	.build(function(err) {
		if (err) {
			throw err
		}
	});