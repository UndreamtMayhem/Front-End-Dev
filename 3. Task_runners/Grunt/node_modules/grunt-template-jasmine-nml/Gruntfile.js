/* global module */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        availabletasks: {
            tasks: {}
        },

        // ////////////////////////////////////////////////////////////////////
        // JSHint (documented at http://www.jshint.com/docs/) and JSONLint
        jsonlint: {
            all: {
                files: [{
                    src: 'package.json'
                }]
            }
        },

        jshint: {
            files: [
                'Gruntfile.js',
                'src/**/*.js',
                'tests/**/*.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },


        // ////////////////////////////////////////////////////////////////////
        // configure unit tests
        jasmine: {
            options: {
                display: 'short',
                keepRunner: true,
                summary: true,

                helpers: [
                    'tests/helpers/**/*.js',
                ],

                specs: [
                    'tests/specs/**/*.spec.js',
                ],
            },

            all: {
                src: ['tests/potions/**/*.js'],

                options: {
                    template: require('./src/js/template'),
                    templateOptions: {
                        root: __dirname,
                    }
                },
            },

            coverage: {
                src: ['tests/potions/**/*.js'],

                options: {
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        template: require('./src/js/template'),
                        templateOptions: {
                            root: __dirname,
                            pathmap: {
                                'tests/potions/': '.grunt/grunt-contrib-jasmine/tests/potions/',
                            }
                        },
                        coverage: 'reports/coverage/coverage.json',
                        report: 'reports/coverage',
                        thresholds: {
                            lines: 95,
                            statements: 95,
                            branches: 95,
                            functions: 95
                        },
                    }
                },
            },
        },

        // ////////////////////////////////////////////////////////////////////
        // configure watcher
        watch: {
            all: {
                files: ['Gruntfile.js', 'package.json', 'src/**/*', 'tests/**/*'],
                tasks: ['test'],
            },
        },
    });


    // load grunt plugins
    grunt.loadNpmTasks('grunt-available-tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jsonlint');

    // define aliases
    grunt.registerTask('test', ['jsonlint', 'jshint', 'jasmine']);
    grunt.registerTask('default', ['availabletasks']);
};
