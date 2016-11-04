module.exports = {
    entry: './src/bootstrap',
    output: {
        path: '_output',
        filename: 'main.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
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
    }
};