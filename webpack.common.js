const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// on peut passer à notre commande de build l'option --production
// on récupère sa valeur ici en tant que booléen

module.exports = {
    entry: [
        'babel-polyfill', // ES6
        path.resolve(__dirname, "src/js/app.js"), // main JS
        path.resolve(__dirname, "src/scss/main.scss") // main CSS
    ],
    output: {
        path: path.resolve(__dirname, "dist"), // destination : /dist/
        filename: "bundle.js" // JS bundle
    },
    externals: {
        jquery: 'jQuery'
    },
    module: {
        // BABEL
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({ // Extrait le CSS du JS dans un fichier CSS externe
            filename: 'bundle.css',
            allChunks: true
        }),
    ],
}