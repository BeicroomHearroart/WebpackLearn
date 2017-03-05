'use strict';

var path = require('path');
var conf = require('./gulp/conf');
var _ = require('lodash');
var wiredep = require('wiredep');
var pathSrcHtml = [ path.join(conf.paths.src, '/**/*.html') ];

function listFiles() {
    var wiredepOptions = _.extend({}, conf.wiredep, {
        dependencies: true,
        devDependencies: true
    });

    return wiredep(wiredepOptions).js
        .concat([ path.join(conf.paths.src, '/test.js')] )
        .concat(pathSrcHtml);
}

module.exports = function(config) {
    var configuration = {
        basePath: './',
        frameworks: ['jasmine'],
        colors: true,
        logLevel: 'INFO',
        autoWatch: false,
        browsers: ['PhantomJS']
    }
}