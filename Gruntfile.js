module.exports = function exports(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		concurrent: {
			target: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true,
				},
			},
		},

		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					ext: 'js,jade',
					delay: 1000,
					legacyWatch: true,
				},
			},
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
				},
				files: {
					'app/client/assets/css/compiled/app.css': 'app/client/assets/css/sass/app.scss',
				},
			},
		},

		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'app/public/assets/js/vendors/jquery-2.1.4.min.js',
					'app/public/assets/js/vendors/*.js',
					'app/public/assets/js/app/**/*.js',
				],
				dest: 'app/public/assets/js/app.js',
			},
		},

		'svg-sprites': {
			all: {
				options: {
					spriteElementPath: './app/public/assets/imgs/sprites/svg/',
					name: 'icons',
					spritePath: './app/public/assets/imgs/sprites/',
					cssPath: './app/public/assets/css/sass/generic/',
					prefix: 'sprite',
					cssSuffix: 'scss',
					cssPngPrefix: '.no-svg',
					cssSvgPrefix: '.svg',
				},
			},
		},

		replace: {
			example: {
				src: './app/public/assets/css/sass/generic/sprite-all-sprite.scss',
				overwrite: true,
				replacements: [{
					from: '../../../',
					to: '../../../assets/',
				}],
			},
		},

		babel: {
	        es6: {
	            files: [
	                {
	                    expand: true,
	                    src: ['app/client/app/**/*.es6'],
	                    ext: '.js'
	                }
	            ]
	        }
	    },

		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'app/client/assets/js/vendors/jquery-2.1.4.min.js',
					'app/client/assets/js/vendors/*.js',
					'app/client/app/**/*.js',
					'app/client/app/**/**/*.js',
				],
				dest: 'app/client/assets/js/app.js',
			},
		},

		uglify: {
			my_target: {
				options: {
					sequences: true,
					dead_code: true,
					conditionals: true,
					booleans: true,
					unused: false,
					if_return: true,
					join_vars: true,
					drop_console: true,
				},
				files: {
					'app/public/assets/js/build/app.min.js': ['app/public/assets/js/app.js'],
				},
			},
		},

		watch: {
			scripts: {
				files: ['app/client/assets/css/sass/**/*.scss', 'app/client/app/**/*.js'],
				tasks: ['sass', 'concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
		},
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-dr-svg-sprites');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-babel');

	// Default task(s).
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('listen', ['concurrent']);
};
