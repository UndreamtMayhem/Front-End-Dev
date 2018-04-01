# grunt-template-jasmine-nml
[![Build Status](https://travis-ci.org/michbuett/grunt-template-jasmine-nml.svg?branch=master)](https://travis-ci.org/michbuett/grunt-template-jasmine-nml)

> A template for [grunt-contrib-jasmine](https://github.com/gruntjs/grunt-contrib-jasmine) task that allows you to easily test your CommonJS style modules in the browser.

## Getting Started
This plugin requires Grunt `^1.0.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-template-jasmine-nml --save-dev
```

Once the plugin has been installed, it may be used inside your Gruntfile.

## Template Options

### templateOptions.root
Type: `String`
The root path of the project. Can usually be omitted.

### templateOptions.pathmap
Type: `Object`
A file path mapping which can be used if the sources are copied or moved before testing (see the istanbul example)

## Examples

```js
// Example configuration for running tests without extras
grunt.initConfig({
  jasmine: {
    taskName: {
      src: 'src/**/*.js',
      options: {
        template: require('grunt-template-jasmine-nml'),
      }
    }
  }
});
```

```js
// Example configuration
grunt.initConfig({
  jasmine: {
    coverage: {
      src: ['src/main/js/*.js'],
      options: {
        specs: ['src/test/js/*.js'],
        template: require('grunt-template-jasmine-istanbul'),
        templateOptions: {
          template: require('grunt-template-jasmine-nml'),
          templateOptions: {
            root: __dirname,
            pathmap: {
              'src/main/js/': '.grunt/grunt-contrib-jasmine/src/main/js/',
            }
          }
          coverage: 'bin/coverage/coverage.json',
          report: 'bin/coverage',
          thresholds: {
            lines: 75,
            statements: 75,
            branches: 75,
            functions: 90
          }
        }
      }
    }
  }
}
```
