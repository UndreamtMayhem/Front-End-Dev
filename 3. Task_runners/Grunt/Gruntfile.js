/*
  "grunt"creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function (grunt) {
  'use strict';
// image fixing works
  grunt.initConfig({
    /* Clear out the images directory if it exists */
    clean: {

    
      dev: {
        src: ['images', 'dist', 'doc'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images', 'dist', 'doc']
        },
      },
    },
    image_resize: {
      resize: {
        options: {
          upscale: true,
          height: 2000,
          width: 3000
        },
        expand: true,
        src: ['*.{gif,jpg,png}'],
        //problem
        cwd: 'src/images/resize/',
        dest: 'dist/images/resized/',
      },
    },
     /* Copy the "fixed" images that don't go through processing into the images/directory */
     copy: {
      dev: {
        files: [{
          expand: true,
          src: '*.{gif,jpg,png}',
          cwd: 'src/images/fixed/',
          dest: 'dist/images/'
        },
       
      ]
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
            src: ['*.{jpg,png}'],
            cwd: 'src/images/',
            dest: 'dist/images/',
          },
          {
            expand: true,
            src: ['**/*.{jpg,png}'],
            cwd: 'dist/images/resized/',
            dest: 'dist/images/',
            
          }
        ]
      }
    },
//html
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


    // html logic
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{                                   // Dictionary of files
          'dist/index.html': 'src/views/index.html',     // 'destination': 'source'
        },{
          src: "**/*.html",
          cwd: "src/views/html/",
          dest: "dist/pug/",
          expand: true,
        }]
      },
    },

    // CSS element
    // changes sass to css
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
  
    csscomb: {
      foo: {
          files: [{
            src: "**/*.css",
            cwd: "src/css/",
            dest: "dist/css/combed/",
            expand: true,
          }]
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
      src: "**/*.css",
            cwd: "dist/css/combed/",
            dest: "dist/css/",
            expand: true,
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

  jshint: {
    all: ['src/js/**/*.js']
  },
   // js
   jsdoc : {
    dist : {
        src: ['src/js/*.js'],
        options: {
            destination: 'doc'
        }
    }
  },
  // merge the js files together
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/js/*.js'],
      dest: 'dist/js/main.js',
    },
  },



    jasmine : {
      src : 'src/js/jasmine/**/*.js',
      options : {
        specs : 'tests/spec/**/*.js'
      }
    },
    src: ['tests/mocha/spec/**/*.js'],

     // Mocha
     mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt',
        },
        src: ['tests/mocha/spec/feedreader.js'],
      },
    }

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
  grunt.loadNpmTasks('grunt-mocha-test');


  grunt.registerTask('build', 
    [
      'clean',
      'mkdir', 
      'copy', 
      'image_resize',
      'responsive_images',
      'pug',
      'htmlmin',
      'sass',
      'csscomb',
      'postcss',
      //'csslint',
      //'jshint',
      'jsdoc',
      'concat',
      
]);

grunt.registerTask('test', ['jasmine', 'mochaTest']);


/*
//need to sort out clean for this
grunt.registerTask('style', ['clean', 'sass', 'csscomb', 'postcss', 'csslint'
]);
*/
//https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433
// add 
//https://www.npmjs.com/package/grunt-template-jasmine-nml
//https://www.npmjs.com/package/grunt-jasmine-node-coverage

// need to install
//https://www.npmjs.com/package/grunt-mocha-istanbul
//https://www.npmjs.com/package/grunt-mocha-test

};


