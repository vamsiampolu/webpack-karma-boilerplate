var ENV = process.env.NODE_ENV;
var merge = require('webpack-merge');
var common = require('./webpack.config.common.js');
var config;
if(ENV === 'dev') {
  var devconfig = require('./webpack.config.dev.js');
  config = merge(common,devconfig);
} else if(ENV === 'test') {
  var testconfig = require('./webpack.config.test.js');
  config = merge(common,testconfig);
}

module.exports = config;
