let path = require('path');

module.exports = {

    entry:{
         main: "./js/main.js",
    },
    output: {
        publicPath: "/",
        filename: "[name].bundle.js"
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
