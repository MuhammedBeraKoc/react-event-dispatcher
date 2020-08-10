const path = require('path')

module.exports = {
    entry: './src/EventEmitter.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'EventEmitter.bundle.js'
    },
    mode: 'production',
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
    },
}