# Intégration HTML / SCSS / JS avec Webpack

## Getting start
```bash
npm i
composer install
npm run start
# CODE !
```
### Development
```bash
# For autocompile source files
npm run start
# For compile 
npm run build
```
### Production
```bash
# Need build and prod for Purify CSS
npm run build
npm run prod
```

## Add JS file
1) Ajouter ton fichier JS dans l'une des catégories suivante :
- src/js/<b>components</b>/ (btn, navbar, carrousel...)
- src/js/<b>lib</b>/ (librairie ajouté)
- src/js/<b>pages</b>/ (JS uniquement sur des pages page spécifique)
- src/js/<b>commun.js</b> (Pour toute les pages)

2) Import ton fichier JS dans le bon fichier main
3) Si tu ajoute une page, Import ton js page dans ``app.js``

## Add SCSS file
1) Créer ton fichier SCSS dans le dossier source
2) Import ton fichier SCSS dans main.scss

## Add HTML file
1) Créer ton fichier HTML dans le dossier source
2) Import ton fichier HTML dans ``webpack.common.js``
````js
/*
  plugins: [
    // IMPORTS ALL HTML FILES
    ...
*/
new HtmlWebpackPlugin({ filename: 'TONHTML.html', template: config.srcPath+'/TONHTML.html' }),
````

# Technos :
- HTML **[(Twig)](https://twig.symfony.com/doc/2.x/)**
- CSS **[(SCSS)](http://sass-lang.com/guide)**
  - Normalize.css 7.0.0
- JS
  - Jquery 3.2.1
- Webpack
  - **[dev]**  [Brower sync](https://github.com/Va1/browser-sync-webpack-plugin) (livereload)
  - **[dev]**  [Clean](https://github.com/johnagan/clean-webpack-plugin) (supprime le dossier de destination)
  - **[dev]**  [Sourcemap](https://webpack.js.org/configuration/devtool/) (chemin des fichiers d'origines)
  - **[both]** [babel-loader](https://github.com/babel/babel-loader) (ES6)
  - **[both]** [file-loader](https://github.com/webpack-contrib/file-loader) (copie img dans le dossier de destination)
  - **[both]** [url-loader](https://github.com/webpack-contrib/url-loader) (copie img dans le dossier de destination)
  - **[both]** [html-loader](https://github.com/webpack-contrib/html-loader) (copie html dans le dossier de destination (**PROD** : minify html))
  - SCSS
    - **[both]** [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) (SASS & SCSS)
    - **[prod]** [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) (Minification du JS)
  - [Postcss](https://github.com/postcss/postcss-loader)
    - **[both]** [Autoprefixer](https://github.com/postcss/autoprefixer) (rajoute les prefix pour la compatiblité navigateur (voir browserslist dans package.json) )
    - **[both]** [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) (Concat les medias query) 
  - **[prod]** [Purify](https://github.com/webpack-contrib/purifycss-webpack) (Remove les class useless)
  - **[prod]** [Eslint](https://github.com/MoOx/eslint-loader) (Lint le JS)
  - **[prod]** [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) (Optimisation des images)


# Documentation :
- Twig : [https://twig.symfony.com/doc/2.x/](https://twig.symfony.com/doc/2.x/)
- SCSS : [http://sass-lang.com/guide](http://sass-lang.com/guide)
# PROBLEM :
````bash
ERROR in Error: Child compilation failed:
  Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
    Referenced from: /Users/vincentbattez/Documents/Documents_mbp-vincent/Programmation/starter-integration/node_modules/mozjpeg/vendor/cjpeg
    Reason: image not found
````
> [Solution](https://github.com/tcoopman/image-webpack-loader/issues/51) : ``brew install libpng`` 


# TODO :
- Starter
  - [X] Moteur de template TWIG (twig branch)
  - [X] Moteur de template JADE (pug branch)
  - [X] Minification d'image (+ redirection dans le dossier de destination)
  - [ ] Générateur de sprite
- Twig 
  - [x] Moteur de template twig
  - [ ] tuto add twig file