const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const base = require("./webpack.config.base.js");

module.exports = merge(base, {
  plugins: [new UglifyJsPlugin()]
});
