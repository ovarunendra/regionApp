// Karma configuration
// Generated on Fri Oct 07 2016 19:22:15 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-cookies/angular-cookies.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/jquery/dist/jquery.js',
      './app/directive/angularui/ui-bootstrap.js',
      './app/directive/angularui/ui-bootstrap-tpls.js',
      './app/directive/ng-table/ng-table.js',
      './app/config/app.js',
      './app/config/**/*.js',
      './app/services/**/*.js',
      './app/uiModule/**/*.js',
    ],


    // list of files to exclude
    exclude: [
      './app/app.bundle.js',
      './app/vendor.bundle.js',
      './app/config/router.js',
      './app/theme.bundle.js',
      './app/uiModule/cacheloader.js',
      './app/**/index.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
