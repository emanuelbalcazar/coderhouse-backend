module.exports = function (grunt) {

    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    // development task
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    // frontend files
    const FRONTEND = ['src/public/app/*.js', 'src/public/app/**/*.js', 'src/public/app/**/**/*.js'];

    // backend files
    const BACKEND = ['src/run.js', 'src/routes/**/*.js', 'src/database/*.js', 'src/*.js', 'src/**/*.js', 'src/**/**/*.js'];

    // task configuration will be written here.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // execute shell commands
        shell: {
            options: {
                stdout: true
            },
            copy_fonts: {
                command: 'cp -R -u -p bower_components/bootstrap/fonts/* src/public/fonts/ && ' +
                    'cp -R -u -p bower_components/font-awesome/web-fonts-with-css/webfonts/* src/public/webfonts/'
            },
            copy_fast: {
                command: 'cp -R -u -p src/public/assets/app.js src/public/assets/app.min.js && ' +
                    'cp -R -u -p src/public/assets/app.css src/public/assets/app.min.css'
            },
            clean: {
                command: 'rm -rf src/public/assets/app.js && rm -rf src/public/assets/app.css'
            }
        },
        // concatenate our JavaScript and CSS files.
        concat: {
            css: {
                options: {
                    stripBanners: true
                },
                dest: './src/public/assets/app.css',
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'bower_components/angular-toastr/dist/angular-toastr.min.css',
                    'bower_components/angular-dialog-service/dist/dialogs.min.css',
                    'bower_components/vis/dist/vis.min.css',
                    'bower_components/ng-table-bundle/ng-table.min.css',
                    'bower_components/angular-ui-select/dist/select.min.css',
                    'bower_components/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.min.css',
                    'bower_components/font-awesome/web-fonts-with-css/css/fontawesome-all.min.css'
                ]
            },
            scripts: {
                options: {
                    separator: ';\n',
                    stripBanners: true
                },
                dest: './src/public/assets/app.js',
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'bower_components/angular-cookies/angular-cookies.min.js',
                    'bower_components/angular-dialog-service/dist/dialogs-default-translations.min.js',
                    'bower_components/angular-dialog-service/dist/dialogs.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-sanitize/angular-sanitize.min.js',
                    'bower_components/angular-toastr/dist/angular-toastr.min.js',
                    'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
                    'bower_components/angular-translate/angular-translate.min.js',
                    'bower_components/angular-translate/angular-translate.min.js',
                    'bower_components/angular-ui-select/dist/select.min.js',
                    'bower_components/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/vis/dist/vis.js',
                    'bower_components/ng-table-bundle/ng-table.min.js',

                    'src/public/app/app.js',
                    'src/public/app/**/*.js',
                    'src/public/app/**/**/*.js'
                ]
            }
        },
        // compress CSS files.
        cssmin: {
            options: {
                specialComments: false,
                advanced: true,
                colors: true,
                report: 'min'
            },
            minify: {
                src: ['src/public/assets/app.css'],
                dest: 'src/public/assets/app.min.css'
            }
        },
        // compress JS files.
        uglify: {
            options: {
                mangle: false,
                report: 'min',
                screwIE8: true,
                beautify: false,
                drop_console: true,
                preserveComments: false
            },
            my_target: {
                files: {
                    'src/public/assets/app.min.js': ['src/public/assets/app.js']
                }
            }
        },
        // validate files with JSHint.
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                force: true,
                esversion: 6,
                '-W138': true   // for defaults parameters [function foo(a = 1)]
            },
            frontend: FRONTEND,
            backend: BACKEND
        },
        // watch files from frontend
        watch: {
            scripts: {
                files: FRONTEND,
                tasks: ['devel'],
                options: {
                    spawn: false,
                },
            },
            options: {
                maxListeners: 99
            }
        },
        // watch files from backend
        nodemon: {
            dev: {
                script: 'src/run.js'
            },
            options: {
                watch: BACKEND
            }
        },
        // execute nodemon and watch concurrently
        concurrent: {
            dev: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    // register all tasks.
    grunt.registerTask('default', ['shell:copy_fonts', 'concat', 'cssmin', 'uglify', 'shell:clean']);
    grunt.registerTask('prod', ['shell:copy_fonts', 'concat', 'cssmin', 'uglify', 'shell:clean']);

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('dev', ['concurrent:dev']);
    grunt.registerTask('devel', ['shell:copy_fonts', 'concat', 'shell:copy_fast', 'shell:clean']);
};
