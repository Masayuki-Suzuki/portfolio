'use strict'

const path = require('path');
const webpack = require("webpack");

let config = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js"
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders:[
      {
        test: /\.jpg/,
        loader: ['url-loader?mimetype=image/jpg']
      },
      {
        test:/\.css/,
        loaders:['style-loader','css-loader']
      },
      {
        test:/\.js/,
        exclude: /node_modules/,
        loaders:['babel-loader']
      },
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.svg/,
        loader: ['url-loader?mimetype=image/svg+xml']
      },
      {
        test: /\.woff/,
        loader: ['url-loader?mimetype=application/font-woff']
      },
      {
        test: /\.woff2/,
        loader: ['url-loader?mimetype=application/font-woff']
      },
      {
        test: /\.eot/,
        loader: ['url-loader?mimetype=application/font-woff']
      },
      {
        test: /\.ttf/,
        loader: ['url-loader?mimetype=application/font-woff']
      }
    ]
  }
}

module.exports = config;
