const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = require("./compile.config");

let devtool = (sourcemap) ? 'source-map' : ' ';
module.exports = merge(common, {
  devtool: devtool, // Active les source-map selon la config choisie
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
          use: [{
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: sourcemap,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')(),
                  require('css-mqpacker')(), // concat les médias
                ],
                sourceMap: sourcemap,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: sourcemap
              }
            },
          ],
        })
      },
      /* - - - - - - - - - - - - *\
          $ PUG
      \* - - - - - - - - - - - - */
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            },
          },
        ],
      }
  ]},
  /*———————————————————————————————————*\
      $ PLUGINS
  \*———————————————————————————————————*/
  plugins: [
    /* - - - - - - - - - - - - *\
        $ BrowserSyncPlugin
    \* - - - - - - - - - - - - */
    new BrowserSyncPlugin({
      // go to http://localhost:3000/dist/homepage.html
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['./']
      }
    }),
    /* - - - - - - - - - - - - *\
        $ CleanWebpackPlugin
    \* - - - - - - - - - - - - */
    new CleanWebpackPlugin([config.distPath])
  ],
});