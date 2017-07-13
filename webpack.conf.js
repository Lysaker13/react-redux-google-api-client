var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    entry: [
        './src/index.ts'
    ],
    output: {
        publicPath: './',
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"],
        modules: [path.join(__dirname, 'src'), 'node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader', "awesome-typescript-loader"],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            },
            comments: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
