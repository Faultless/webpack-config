const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const glob = require('glob');
var fs = require('fs');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  server: path.join(__dirname, 'server'),
  build: path.join(__dirname, 'server/public'),
};

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const backendConfig = merge([
  {
    entry: {
      app: './server/app.js',
    },
    target: 'node',
    output: {
      path: PATHS.build,
      filename: 'backend.js',
    },
    externals: nodeModules,
  },
  parts.lintJavaScript({ include: PATHS.server }),
]);

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo',
      }),
    ],
  },
  parts.lintJavaScript({ include: PATHS.app }),
  parts.lintCSS({ include: PATHS.app }),
  parts.loadFonts({
    options: {
      name: '[name].[ext]',
    },
  }),
]);

const productionConfig = merge([
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()],
  }),
  parts.purifyCSS({
    paths: glob.sync(path.join(PATHS.app, '**', '*')),
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]',
    },
  }),
]);

const developmentConfig = merge([
  {
    plugins: [
      new webpack.NamedModulesPlugin(),
    ],
  },
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  parts.loadImages(),
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  if (env === 'dev-development') {
    return backendConfig;
  }

  return merge(commonConfig, developmentConfig);
};