let path = require('path');

module.exports = {

    entry:[
         './js/main.js'
    ],
    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 2048
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader'
            }
        ]
    }
};