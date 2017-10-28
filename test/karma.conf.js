let webpackConfig = require('./../webpack/webpack.test')

module.exports = (config) => {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
      './../node_modules/babel-polyfill/dist/polyfill.js',
      '**/*.test.js'
    ],
    exclude: [],
    preprocessors: {
      '**/*.test.js': ['webpack']
    },
    // webpack: {},
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
