var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
        module: {
            loaders: [{
                test: /\.ts$/,
                loaders: ['babel-loader', "awesome-typescript-loader"],
                exclude: /node_modules/
            }]
    },
    resolve: {
        extensions: ['.js', '.ts'],
            alias: {
            googleApiClient: path.resolve(__dirname, 'src/'),
        }
    },
};