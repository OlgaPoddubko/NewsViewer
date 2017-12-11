let path = require('path');

module.exports = {
  //context: path.resolve(__dirname, "app"),

    entry:[
         './js/main.js' // "./main.js"
    ],
    output: {
      //path: path.resolve(__dirmane, "dist"),
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
