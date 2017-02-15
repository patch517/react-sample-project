'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configure = (configurator, options) => {
  configurator.merge({
    entry: {
      sampleproject: path.join(__dirname)
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: '[name].js'
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
      ],
    },
    plugins: [new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: false
    })]
  });

  options.useStylusExtractText = true;
  options.useBase64FontLoader = true;
  options.useVendorChunk = true;

  return configurator;
};

const postConfigure = (configurator) => {
  configurator.preLoader('eslint', (current) => {
    current.exclude = /(node_modules|lib)/;
    return current;
  });
};

module.exports = { configure: configure, postConfigure: postConfigure };
