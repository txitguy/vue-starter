// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const webpackConfig = require('../../bin/webpack.test.conf');

module.exports = function(config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['ChromeHeadless'],
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-source-map-support',
      'karma-sinon-chai',
      'karma-spec-reporter'
    ],
    frameworks: ['mocha', 'sinon-chai', 'source-map-support'],
    reporters: ['spec'],
    files: [
      'https://code.jquery.com/jquery-3.3.1.min.js',
      'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
      './index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    mime: {
      'text/x-typescript': ['ts']
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
