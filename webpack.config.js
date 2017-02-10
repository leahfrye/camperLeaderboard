var webpack = require("webpack");
var path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  module: {
   loaders: [
     {
       test: /\.js?$/,
       loader: "babel-loader",
       exclude: /node_modules/,
       query: {
         presets: ["es2015", "react"]
       }
     },
     {
       test: /\.scss$/,
       loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
     },
   ]
 },
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "dist/",
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css")
  ]
};
