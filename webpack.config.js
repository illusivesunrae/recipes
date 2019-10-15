const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const banner = pkg.name + ` - @version ` + pkg.version + `

Copyright (C) 2019 Rachel O'Connor
SPDX-License-Identifier: BSD-3-Clause`;

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js'),
    libraryTarget: 'var',
    library: 'Component'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
};