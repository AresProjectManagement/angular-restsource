// Karma configuration
// Generated on Fri Aug 09 2013 09:44:05 GMT-0700 (PDT)

module.exports = function (config) {
    'use strict';

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'app/components/angular/angular.js',
            'app/components/angular-mocks/angular-mocks.js',
            'src/scripts/*.js',
            '.tmp/scripts/*',
            'test/fixtures/*.js',
            'test/spec/**/*-spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'junit', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            //'src/scripts/*.js': ['coverage'],
            //'src/scripts/**/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'cobertura', // xml format supported by Jenkins
            dir: 'reports/coverage',
            file: 'unit-test-coverage.xml'
        },

        junitReporter: {
            outputFile: 'reports/test/unit-test-results.xml'
        },

        // web server port
        port: 9876,

        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 5000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
