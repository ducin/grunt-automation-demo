module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ['build']
        },
        copy: {
            "html-src": {
                files: [{
                    src: 'src/html/index.html',
                    dest: 'build/index.html'
                }, {
                    src: 'src/js/append.js',
                    dest: 'build/append.js'
                }]
            },
            "js-src": {
                src: 'src/js/hello.js',
                dest: 'build/hello-js.js'
            }
        },
        coffee: {
            "coffee-src": {
                src: 'src/coffee/hello.coffee',
                dest: 'build/hello-coffee.js'
            }
        },
        concat: {
            build: {
                src: ['build/append.js', 'build/hello-*.js'],
                dest: 'build/app.js'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    base: 'build',
                    open: true,
                    livereload: true
                }
            }
        },
        watch: {
            sources: {
                files: ['src/js/append.js', 'src/**/*'],
                tasks: ['build'],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', [
        'clean',
        'copy',
        'coffee',
        'concat'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
