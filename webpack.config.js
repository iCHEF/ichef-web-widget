const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'widget.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
        ],
    },
};
