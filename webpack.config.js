const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    /* The base directory (absolute path!) for resolving the entry option */
    context: path.join(__dirname, 'src'),
    /* The entry point for the bundle */
    entry: './bootstrap',
    output: {
        path: path.join(__dirname, '_output'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
          }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './index.html'
            }
        ])
    ]
};