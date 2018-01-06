const PurifyCSSPlugin = require('purifycss-webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const glob = require('glob-all');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = require("./compile.config");

module.exports = merge(common, {
  module: {
    // SASS
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ // use sass + css loader
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')(),
                  require('css-mqpacker')(),
                ]
              }
            },
            {
              loader: 'sass-loader',
            },
          ],
        })
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  },
  plugins: [
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync([
        config.purify.testFile,
        config.distPath + config.bundle_JS
      ]),
      purifyOptions: {
        minify: true,
        info: true,
        rejected: true,
        // whitelist: []
      }
    }),
    new UglifyJsPlugin({}),
  ],
});