const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const component = require('./package.json');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: [
  './component.js', 
  './component.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
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
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      { 
      	test: /\.twig$/, 
      	loader: "twig-loader" 
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'component.bundle.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
    	title: component.name, 
    	template: '../template.twig',
    	minify: {
    		collapseWhitespace: true
    	}
    })
  ],
  devServer: {
    inline: true,
    port: 8009
  }
};