const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = require("./compile.config");

module.exports = merge(common, {
  devtool: 'source-map', // Active les source-map
  module: {
    // SASS
    rules: [{
      test: /\.s[ac]ss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
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
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      })
    },
  ]},
  plugins: [
    new BrowserSyncPlugin({ 
        // browse to http://localhost:8888/ during development,  
        host: 'localhost', 
        port: 3000, 
        proxy: 'http://localhost:8888/starter-integration/', // YOUR PROXY (le localhost de wamp) NE PAS PUSH 
        files: ['*.php', '**/*.twig'] 
    }), 
    new CleanWebpackPlugin([config.distPath])
  ],
});