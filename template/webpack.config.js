'use strict';

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  // Enable source map
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'app.ts'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'swc-loader', // you would put swc-loader
          options: {
            // Enable source map
            sourceMap: true,
            // This makes swc-loader invoke swc synchronously.
            sync: true,
          },
        },
      },
    ],
  },
  plugins: [new Dotenv()],
  devServer: {
    port: 3000,
  },
};
