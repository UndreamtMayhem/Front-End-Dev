'use strict';

var path = require('path');
var loader = require('node-module-loader');
var templateFile = __dirname + '/../tpl/SpecRunner.tpl';
var projectRoot = __dirname + '/../../../..';

exports.process = function (grunt, task, context) {
    var templateSrc = grunt.file.read(templateFile);
    var modules = [].concat(
        context.scripts.src,
        context.scripts.helpers,
        context.scripts.specs
    ).map(function (s) {
        return ('./' + s).replace(/\/\//g, '/').replace(/\.js$/, '');
    });

    loader.build({
        pathmap: context.options.pathmap,
        root: path.resolve(projectRoot, (context.options.root || '')),
        modules: modules,
        target: context.temp + '/loader.js'
    });

    return grunt.util._.template(templateSrc)(context);
};
