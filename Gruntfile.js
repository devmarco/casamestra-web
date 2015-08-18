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
					'app/public/assets/css/compiled/app.css': 'app/public/assets/css/sass/app.scss',
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
				files: ['app/public/assets/css/sass/**/*.scss', 'app/public/assets/js/app/**/*.js'],
				tasks: ['svg-sprites', 'replace', 'sass', 'concat', 'uglify'],
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

	// Default task(s).
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('listen', ['concurrent']);
};
