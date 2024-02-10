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
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
}