/*
  "grunt"creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [
            { name: 'sm', suffix: '_1x', quality: 60, width: 600 },
            { name: 'sm', suffix: '_2x', quality: 60, width: 1200 },
            { name: 'md', suffix: '_1x', quality: 60, width: 900 },
            { name: 'md', suffix: '_2x', quality: 60, width: 1800 },
            { name: 'lg', suffix: '_1x', quality: 60, width: 1440 },
            { name: 'lg', suffix: '_2x', quality: 60, width: 2880 }
          ]
        },
        files: [
          {
            expand: true,
            src: ['**/*.{jpg,png}'],
            cwd: 'src/',
            dest: 'dest/img'
          }
        ]
      }
    },
    image_resize: {
      resize: {
        options: {
            upscale: true,
            height: 1000,
                    },
        src: ['*.{gif,jpg,png}'],
        cwd: 'images_src/',
        dest: 'images/',

      }, 
    },

    
    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },

    // html logic
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'index.html',     // 'destination': 'source'
        }
      },
    },
    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'dist/pug/dest.html': ['templates/*.pug']
        }
      }
    },
    // needs testing
    htmlhint: {
      html1: {
        options: {
          'tag-pair': true
        },
        src: ['index.html']
      },
      html2: {
        options: {
          'tag-pair': true
        },
        src: ['*.html']
      }
    },

    // CSS element
    // changes sass to css
    sass: {
      options: {
          sourceMap: true
      },
      dist: {
          files: {
              'css/index.css': './sass/foundation/**/foundation.scss'
          }
      }
    },

    csscomb: {
      //https://github.com/csscomb/csscomb.js/blob/master/doc/options.md
      foo: {
          files: {
              'dist/css/main.css': ['css/main.css'],
          }
      },
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
          require('autoprefixer')({browsers: 'last 4 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/main.css'
      }
    },

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

    // js
    jsdoc : {
      dist : {
          src: ['js/*.js'],
          options: {
              destination: 'doc'
          }
      }
    },
    jshint: {
      all: ['js/**/*.js']
    },

    // merge the js files together
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/*.js'],
        dest: 'dist/js/main.js',
      },
    },

    uglify: {
      my_target: {
        files: {
          'dist/js/main.min.js': ['dist/js/main.js']
        }
      }
    },

    watch: {
      scripts: {
        files: ['sass/foundation/**/*.scss'],
        tasks: ['sass'],
        options: {
          reload: true,
          spawn: false,
        },
      },
    },
    
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js'
      }
    },
  });

  // Grunt Dependencies
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-image-resize');

  // html logic
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // css
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-csscomb');
  //js
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');



  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-jasmine');



  grunt.registerTask('default', 
    [
      'clean',
      'mkdir', 
      //'copy', 
      //'responsive_images',
      //'htmlmin',
      //'pug',
      //'htmlmin',
      //'sass',
      //'csscomb',
      //'postcss',
      //'csslint',
      //'jsdoc',
      //'concat'
      //'jshint',
      //'jasmine'
      
]);
grunt.registerTask('test', ['jasmine', 'jshint']);

//https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433
// add 
//https://www.npmjs.com/package/grunt-template-jasmine-nml
//https://www.npmjs.com/package/grunt-jasmine-node-coverage

// need to install
//https://www.npmjs.com/package/grunt-mocha-istanbul
//https://www.npmjs.com/package/grunt-mocha-test

};


