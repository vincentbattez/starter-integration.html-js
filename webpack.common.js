const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');


var SvgStore            = require('webpack-svgstore-plugin');

const config            = require("./compile.config");

module.exports = {
  /*———————————————————————————————————*\
      $ ENTRY
  \*———————————————————————————————————*/
  entry: [
    // 'babel-polyfill',         // ES6
    config.srcPathMain_JS,    // main JS
    config.srcPathMain_SCSS   // main CSS
  ],
  /*———————————————————————————————————*\
      $ OUTPUT
  \*———————————————————————————————————*/
  output: {
    path: config.distPath,       // name of dist folder
    filename: config.distFolder_JS + config.bundle_JS   // name of bundle js
  },    
  resolve: {
    extensions: ['.js']
  },
  module: {
    /*———————————————————————————————————*\
        $ RULES
    \*———————————————————————————————————*/
    rules: [
      /* - - - - - - - - - - - - *\
          $ JS
      \* - - - - - - - - - - - - */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      /* - - - - - - - - - - - - *\
          $ IMAGES
      \* - - - - - - - - - - - - */
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: config.distFolder_IMG,
            }
          },
        ]
      },
    ] // rules
  }, // modules
  /*———————————————————————————————————*\
      $ PLUGINS
  \*———————————————————————————————————*/
  plugins: [
    /* - - - - - - - - - - - - *\
        $ ProvidePlugin
    \* - - - - - - - - - - - - */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
     }),
    /* - - - - - - - - - - - - - - *\
        $ ExtractTextPlugin (scss)
    \* - - - - - - - - - - - - - - */
    new ExtractTextPlugin({
      // filename: config.bundle_CSS, // name of bundle css + css dist folder
      filename: config.distFolder_CSS + config.bundle_CSS, // name of bundle css + css dist folder
      allChunks: true
    }),
    /* - - - - - - - - - - - - - - *\
        $ HtmlWebpackPlugin (pug)
    \* - - - - - - - - - - - - - - */
    new HtmlWebpackPlugin({ filename: config.distPath+'/homepage.html', template: config.srcPath_HTML + '/homepage.pug' }),
    /* - - - - - - - - - - - - *\
        $ SVGSTORE (icons)
    \* - - - - - - - - - - - - */
    new SvgStore({
      // svgo options
      svgoOptions: {
        plugins: [
          { removeDoctype: true },
          { removeTitle: true },
          { removeMetadata: true },
          { removeComments: true },
          { removeDesc: true },
          { removeDimensions: true },
          { removeUselessStrokeAndFill: true },
          { removeUnknownsAndDefaults: true },
          { cleanupIDs: true },
          { cleanupAttrs: false },
          { moveGroupAttrsToElems: true }
        ]
      },
      prefix: 'icon-'
    })
  ],
  /*———————————————————————————————————*\
      $ EXTERNALS
  \*———————————————————————————————————*/
  externals: {
    'jquery': 'jQuery'
  },
}