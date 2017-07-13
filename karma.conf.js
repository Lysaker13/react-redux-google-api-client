var webpackConf = require('./webpack.karma.conf');

module.exports = function (config) {
    config.set({
        basePath: '.',
        colors: true,
        browsers: [ 'Chrome' ],
        frameworks: [ 'mocha' ],
        reporters: [ 'mocha' , 'coverage' ],
        plugins: [
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-mocha',
            'karma-sinon',
            'karma-coverage',
            'karma-mocha-reporter',
            'karma-chrome-launcher'
        ],
        // autoWatch: true,
        port: 8081,
        logLevel: config.LOG_ERROR,
        files: [
            'webpack.tests.js'
        ],
        preprocessors: {
            'webpack.tests.js': [ 'webpack', 'coverage', 'sourcemap' ]
        },
        webpack: webpackConf,

        webpackServer: {
            noInfo: true
        },

        failOnEmptyTestSuite: false
    });
}
