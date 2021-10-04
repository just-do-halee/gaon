const obj = {};

const webpack = require('webpack');

obj.modes = { dev: 'development', pro: 'production' };
obj.rootDir = (path) => __dirname + '/' + path;
obj.getPlugins = (mode) => [
  new webpack.EnvironmentPlugin({
    mode,
  }),
];

module.exports = obj;
