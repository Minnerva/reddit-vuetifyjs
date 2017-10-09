// Karma configuration
// Generated on Sat Oct 07 2017 16:45:20 GMT+0700 (SE Asia Standard Time)

module.exports = (config) => {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: ['test/**/*.test.js'],
    exclude: [],
    preprocessors: {
      'test/**/*.test.js': ['webpack']
    },
    webpack: {},
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
