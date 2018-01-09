# Intégration HTML / SCSS / JS avec Webpack

## Getting start
```
npm i
npm run start
```
CODE !

## Add JS file
1) Ajouter votre fichier JS dans l'une des catégories suivante :
- src/js/<b>components</b>/ (btn, navbar, carrousel...)
- src/js/<b>lib</b>/ (librairie ajouté)
- src/js/<b>pages</b>/ (JS uniquement sur les pages)
- src/js/<b>commun.js</b> (Pour toute les pages)

2) Import ton fichier JS dans le bon fichier main
3) Si tu ajoute une page, Import ton js page dans app.js

## Add SCSS file
1) Ajoute ton fichier SCSS
2) Import ton fichier SCSS dans main.scss

# Technos :
- HTML
- CSS
  - Normalize.css 7.0.0
- SCSS
- JS
  - Jquery 3.2.1
- Webpack
  - **[dev]**  [Brower sync](https://github.com/Va1/browser-sync-webpack-plugin) (livereload)
  - **[dev]**  [Clean](https://github.com/johnagan/clean-webpack-plugin) (supprime le dossier ./dist)
  - **[dev]**  [Sourcemap](https://webpack.js.org/configuration/devtool/) (chemin des fichiers d'origines)
  - **[both]** [babel-loader](https://github.com/babel/babel-loader) (ES6)
  - **[both]** [file-loader](https://github.com/webpack-contrib/file-loader) (redirection dans le dist)
  - SCSS
    - **[both]** [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
    - **[prod]** [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) (Minification du JS)
  - [Postcss](https://github.com/postcss/postcss-loader)
    - **[both]** [Autoprefixer](https://github.com/postcss/autoprefixer) (rajoute les prefix pour la compatiblité navigateur (voir browserslist dans package.json) )
    - **[both]** [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) (Concat les medias query) 
  - **[prod]** [Purify](https://github.com/webpack-contrib/purifycss-webpack) (Remove les class useless)
  - **[prod]** [Eslint](https://github.com/MoOx/eslint-loader)
  - **[prod]** [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) (Optimisation des images)



# TODO :
- Starter
  - [X] Moteur de template TWIG (twig branch)
  - [X] Moteur de template JADE (pug branch)
  - [X] Minification d'image (+ redirection dans le dossier de destination)
  - [ ] Générateur de sprite