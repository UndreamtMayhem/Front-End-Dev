# Grunt Task Runner 

## Running
Install node and grunt dependencies

```
npm init
```

Lint CSS 

```
grunt csslint
```

Build the project
- css
- images
- js
- pug
- index.html [Entry point]

```
grunt build
```

Watch Sass files

```
grunt watch
```

Start the express server to deliver responsive images

```
npm start
```

### Home Page: 

![logo](https://github.com/UndreamtMayhem/Front-End-Dev/blob/task_runners/3.%20Task_runners/Grunt/resources/home.png "didnt read")

## Udacity Responsive Images: Project


### Achieved: ##

* Make the images fit in their containers in the viewport.
* Restrain the width of the blog.
* Drop the page weight.


![logo](https://github.com/UndreamtMayhem/Front-End-Dev/blob/task_runners/3.%20Task_runners/Grunt/resources/browserimagefetch.PNG "didnt read")


### What grunt uses
- Grunt Tasks
    1. grunt-contrib-clean
    2. grunt-mkdir
    3. grunt-contrib-copy
    4. grunt-contrib-watch
- Grunt Responsive Images
    1. grunt-responsive-images
    2. grunt-image-resize
- Grunt html
    1. grunt-contrib-pug
    2. grunt-contrib-htmlmin
- Grunt CSS and SASS
    1. grunt-sass
    2. grunt-postcss
    3. grunt-contrib-csslint
    4. grunt-csscomb
- Grunt JS
    1. grunt-jsdoc
    2. grunt-contrib-jshint
    3. grunt-contrib-uglify
    4. grunt-contrib-concat
- Grunt Test
    1. grunt-contrib-jasmine
    2. grunt-mocha-test

#### Sidenote
It is better to do testing via NPM however I included tests in grunt to demonstate an understanding of working with grunt.

## General Advice ##

Check the page with the Chrome Dev Tools:

* Open the tools, open the Network tab, reload the page and look at the number of requests, total transfer size and time to load.
* Change to device emulation mode by clicking the phone icon in the Dev Tools (at the top left next to the magnifying glass icon). Try the various throttling options to emulate a GPRS mobile phone cell connection -- now look at the Network tab. The page takes several minutes to complete loading. (Remember that studies by Amazon, Google and others show an increased drop off in revenue with delays of less than 0.1 seconds!) Even with a good DSL connection, load time is still over 10 seconds.
* Try out emulation on different devices, portrait and landscape (click the icon next to the dimensions). What problems do you notice with each image? Which ones look worse?

#### Future Improvements
1. Make more responsive image types for 4k support
2. Use WEB P format
3. Use img srcset attribute