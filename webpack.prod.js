const PurifyCSSPlugin = require('purifycss-webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const glob = require('glob-all');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = require("./compile.config");

module.exports = merge(common, {
  module: {
    /*———————————————————————————————————*\
        $ RULES
    \*———————————————————————————————————*/
    rules: [
      /* - - - - - - - - - - - - *\
          $ SASS
      \* - - - - - - - - - - - - */
      {
        test: /\.s[ac]ss$/,
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
      /* - - - - - - - - - - - - *\
          $ IMAGES
      \* - - - - - - - - - - - - */
      {
        test: /\.(gif|png|jpe?g|svg)$/i, 
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true, 
                quality: 65 
              },
              // optipng.enabled: false will disable optipng 
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
      /* - - - - - - - - - - - - *\
          $ PUG
      \* - - - - - - - - - - - - */
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: html_pretty,
          }
        }
      }
    ]
  },
  /*———————————————————————————————————*\
      $ PLUGINS
  \*———————————————————————————————————*/
  plugins: js_minification ? [
      /* - - - - - - - - - - - - *\
          $ true
      \* - - - - - - - - - - - - */
      new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync([
          config.purify.testFile,
          config.distPath + config.bundle_JS
        ]),
        purifyOptions: {
          minify: css_minification,
          info: true,
          rejected: true,
          // whitelist: []
        }
      }),
      new UglifyJsPlugin({}),
    ] :
    [
      /* - - - - - - - - - - - - *\
          $ false
      \* - - - - - - - - - - - - */
      new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync([
          config.purify.testFile,
          config.distPath + config.bundle_JS
        ]),
        purifyOptions: {
          minify: css_minification,
          info: true,
          rejected: true,
          // whitelist: []
        }
      })
    ],
});