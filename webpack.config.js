const path = require('path')

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'event-dispatcher.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default',
        library: 'EventDispatcher'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    optimization: {
        minimize: false
    }
}