/**
 * @author [Undreamtmayhem]
 * @email [undreamtmayhem@gmail.com]
 * @create date 2018-04-02 04:56:00
 * @modify date 2018-04-02 04:56:00
 * @desc Build process
    "grunt clean" removes the Dist and js doc directory
    "grunt mkdir" creates a new, Dist and js doc directory
    "grunt image_resize"
    "grunt copy"
    "grunt responsive_images" re-processes images without removing the old ones
    "grunt pug"  pug to html
    "grunt htmlmin"  minify all html files
    "grunt sass"  sass to css
    "grunt csscomb" order css properties
    "grunt postcss" minify css and add browser extensions
    "grunt csslint" check css is formatted correctly
    "grunt jshint" check js is formatted correctly
    "grunt jsdoc" make js documentation
    "grunt concat" combine js files together
    "grunt jasmine test" run jasmine tests
    "grunt mocha test" run mocha tests
*/

module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        /* Clear out the build directory and js docs if it exists */
        clean: {
            dev: {
                src: ['dist', 'doc']
            }
        },

        /* Generate the build directory and js docs directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['dist', 'doc']
                }
            }
        },

        /* Resize the images in the directory labelled resize */
        image_resize: {
            resize: {
                options: {
                    upscale: true,
                    height: 2000,
                    width: 3000
                },
                expand: true,
                src: ['*.{gif,jpg,png}'],
                cwd: 'src/images/resize/',
                dest: 'dist/images/resized/'
            }
        },

        /* Copy the "fixed" images that don't go through processing into the dist/images */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: '*.{gif,jpg,png}',
                    cwd: 'src/images/fixed/',
                    dest: 'dist/images/'
                }]
            }
        },

        /* Make images responsive 1x and 2x also sm, md, lg size formats in the src/images directory output into  dist/images */
        responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    sizes: [{
                        width: 300,
                        suffix: '_small',
                        quality: 50
                    }, {
                        width: 600,
                        suffix: '_medium',
                        quality: 30
                    }, {
                        name: 'large-x1',
                        width: 800,
                        suffix: '_large_1x',
                        quality: 30
                    }, {
                        name: 'large-x2',
                        width: 1600,
                        suffix: '_large_2x',
                        quality: 30
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{jpg,png}'],
                    cwd: 'src/images/',
                    dest: 'dist/images/'
                }, {
                    expand: true,
                    src: ['**/*.{jpg,png}'],
                    cwd: 'dist/images/resized/',
                    dest: 'dist/images/'
                }]
            }
        },

        // Pug to html
        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: [{
                    src: "**/*.pug",
                    cwd: "src/views/pug_template/",
                    dest: "src/views/html/",
                    expand: true,
                    ext: ".html"
                }]
            }
        },

        // Minify HTML
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{ // Dictionary of files
                    'dist/index.html': 'src/views/index.html' // 'destination': 'source'
                }, {
                    src: "**/*.html",
                    cwd: "src/views/html/",
                    dest: "dist/pug/",
                    expand: true
                }]
            }
        },

        // SASS to CSS
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/foundation.css': 'src/sass/foundation/foundation.scss'
                }
            }
        },
        // Lint CSS
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['dist/css/**/*.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['dist/css/**/*.css']
            }
        },
        // Order CSS by properties
        csscomb: {
            foo: {
                files: [{
                    src: "**/*.css",
                    cwd: "src/css/",
                    dest: "dist/css/combed/",
                    expand: true
                }]
            }
        },
        // auto prefix and minify
        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'dist/css/maps/' // ...to the specified directory
                },

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({
                        browsers: 'last 4 versions'
                    }), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: "**/*.css",
                cwd: "dist/css/combed/",
                dest: "dist/css/",
                expand: true
            }
        },


        // JS hint
        jshint: {
            all: ['src/js/**/*.js', '!src/js/jquery-3.3.1.js']
        },

        // js documentation
        jsdoc: {
            dist: {
                src: ['src/js/*.js', '!src/js/picturefill.js'],
                options: {
                    destination: 'doc'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/main.js': ['src/js/*.js']
                }
            }
        },

        // Combine all js files
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/main.js'
            }
        },

        // Jasmine Test suite
        jasmine: {
            src: 'src/js/jasmine/**/*.js',
            options: {
                specs: 'tests/jasmine/spec/**/*.js'
            }
        },

        // Mocha Test Suite
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt'
                },
                src: ['tests/mocha/spec/feedreader.js']
            }
        },
        watch: {
            scripts: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    debounceDelay: 250
                }
            }
        }
    });

    // Grunt Dependencies
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // html and pug Plugins
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-pug');

    // css and sass plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-csscomb');

    // js plugins
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // Test Plugins
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-mocha-test');


    // TASKS
    grunt.registerTask('build', [
        'clean',
        'mkdir',
        'copy',
        'image_resize',
        'responsive_images',
        'pug',
        'htmlmin',
        'sass',
        'csslint',
        'csscomb',
        'postcss',
        'jsdoc',
        'uglify',
        'jshint'
    ]);

    grunt.registerTask('test', ['jasmine', 'mochaTest']);

};