const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'jselect.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'JSelect',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
}