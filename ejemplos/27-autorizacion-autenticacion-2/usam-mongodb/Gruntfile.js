module.exports = function (grunt) {

    require('time-grunt')(grunt);

    // development task
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    const SOURCES = ['src/*.js', 'src/**/*.js', 'src/**/**/*.js', 'src/**/**/**/.js'];

    // task configuration will be written here.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // execute shell commands
        shell: {
            options: {
                stdout: true
            },
            seed: {
                command: 'npm run seed'
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
            sources: SOURCES
        },
        // watch files from backend
        nodemon: {
            dev: {
                script: 'src/run.js'
            },
            options: {
                watch: SOURCES
            }
        }
    });

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('watch', ['nodemon']);
    grunt.registerTask('seed', ['shell:seed']);
};
