'use strict';

const gaon = require('./gaon.config');

const ENTRY = 'app.ts';
const MODE = gaon.modes.dev;
const PORT = 3000;

module.exports = {
  mode: MODE,
  entry: gaon.rootDir('src/' + ENTRY),
  output: {
    path: gaon.rootDir('build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(bower_components)/,
        use: {
          loader: 'swc-loader',
          options: {
            sourceMap: true, // *
            sync: true,
          },
        },
      },
    ],
  },
  devtool: 'source-map', // *
  plugins: gaon.getPlugins(MODE),
  devServer: {
    port: PORT,
  },
};
