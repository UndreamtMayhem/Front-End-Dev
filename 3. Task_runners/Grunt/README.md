# Grunt Module loader

## Running
```
npm init
```

```
grunt csslint
```

```
grunt build
```

```
grunt watch
```

```
npm start
```

Inline-style: 
![alt text](https://github.com/UndreamtMayhem/Front-End-Dev/blob/task_runners/3.%20Task_runners/Grunt/src/images/sfo.jpg "didnt read")

## Udacity Responsive Images: Project


### Achieved: ##

* Make the images fit in their containers in the viewport.
* Restrain the width of the blog.
* Drop the page weight.

### what it uses

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
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // css and sass plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-csscomb');
  
  // js plugins
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Test Plugins
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-mocha-test');


## General Advice ##

Check the page with the Chrome Dev Tools:

* Open the tools, open the Network tab, reload the page and look at the number of requests, total transfer size and time to load.
* Change to device emulation mode by clicking the phone icon in the Dev Tools (at the top left next to the magnifying glass icon). Try the various throttling options to emulate a GPRS mobile phone cell connection -- now look at the Network tab. The page takes several minutes to complete loading. (Remember that studies by Amazon, Google and others show an increased drop off in revenue with delays of less than 0.1 seconds!) Even with a good DSL connection, load time is still over 10 seconds.
* Try out emulation on different devices, portrait and landscape (click the icon next to the dimensions). What problems do you notice with each image? Which ones look worse?

Check the page from Page Speed Insights 

