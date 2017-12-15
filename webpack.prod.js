const PurifyCSSPlugin = require('purifycss-webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const glob = require('glob-all');
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common,{
    module: {
        // SASS
        rules: 
        [
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
                              require('cssnano')()
                            ]
                        } 
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            })
        }
    ]
    },
    plugins: [
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync([
                path.join(__dirname, '*.html'),
                path.join(__dirname, './dist/bundle.js')
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