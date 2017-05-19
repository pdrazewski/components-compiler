const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const component = require('./package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: [
  './js/component.js', 
  './css/style.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.min.js',
  },
  module: { 
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      { 
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader'])
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=100000'
      }, 
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      { 
      	test: /\.twig$/, 
      	loader: "twig-loader" 
      }
    ]
  },
  devtool: "#inline-source-map",
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/styles.bundle.min.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
    	title: component.name, 
    	template: '../template.twig',
    	minify: {
    		collapseWhitespace: true
    	},
      hash: true,
      cache: true
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: 'static' }
    ])
  ],
  devServer: {
    inline: true,
    port: 8009
  }
};
