var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'whatwg-fetch',
    './src/index'
  ],
  module: {
   loaders: [
     {
       test: /\.js?$/, loader: 'babel', exclude: /node_modules/
     },
     {
       test: /\.scss$/,
       loaders: ['style-loader', 'css-loader', 'sass-loader']
     }
   ]
 },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
