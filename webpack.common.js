const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const config = require("./compile.config");

module.exports = {
  entry: [
    'babel-polyfill',         // ES6
    config.srcPathMain_JS,    // main JS
    config.srcPathMain_SCSS   // main CSS
  ],
  output: {
    path: config.distPath,                              // destination : voir compile.config
    filename: config.bundle_JS   // name of bundle js
    // filename: config.distFolder_JS + config.bundle_JS   // name of bundle js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
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
    ]
  },
  plugins: [
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery:'jquery'
		}),
    new ExtractTextPlugin({
      filename: config.bundle_CSS, // name of bundle css + css dist folder
      // filename: config.distFolder_CSS + config.bundle_CSS, // name of bundle css + css dist folder
      allChunks: true
    }),
  ],
}