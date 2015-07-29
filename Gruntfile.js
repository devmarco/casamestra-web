module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		concurrent: {
			target: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					ext: 'js,jade',
					delay: 1000,
					legacyWatch: true
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'app/public/assets/css/compiled/app.css': 'app/public/assets/css/sass/app.scss'
				}
			}
		},

		sprite:{
			all: {
				src: 'app/public/assets/imgs/sprites/png/*.png',
				dest: 'app/public/assets/imgs/sprites/icons.png',
				destCss: 'app/public/assets/css/sass/generic/_icons.scss',
				imgPath: '../../imgs/sprites/icons.png'
			}
		},

		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'app/public/assets/js/vendors/jquery-2.1.4.min.js', 
					'app/public/assets/js/vendors/*.js',
					'app/public/assets/js/app/**/*.js'
				],
				dest: 'app/public/assets/js/app.js',
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
					drop_console: true
				},
				files: {
					'app/public/assets/js/build/app.min.js': ['app/public/assets/js/app.js']
				}
			}
		},

		watch: {
			scripts: {
				files: ['app/public/assets/css/sass/**/*.scss', 'app/public/assets/js/app/**/*.js'],
				tasks: ['sass', 'sprite:all', 'concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('listen', ['concurrent']);
};