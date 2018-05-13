console.log("ready!");
/*———————————————————————————————————*\
    $ LIBRAIRIES
\*———————————————————————————————————*/
import 'jquery';
import './lib/unelib';

/*———————————————————————————————————*\
    $ PAGES
\*———————————————————————————————————*/
import Router from './util/Router';
import common from './common';
import homepage from './pages/homepage';

/*———————————————————————————————————*\
    $ ROUTER
\*———————————————————————————————————*//*
  <body class="homepage">

*/
const routes = new Router({
  // Commun
  common,
  // Toutes les autres pages
  homepage,
});


/*———————————————————————————————————*\
        $ XHR ICONS
\*———————————————————————————————————*/
var __svg__  = { path: './../images/icons/**/*.svg', name: 'images/spriteXHR.svg' };
__svg__      = { filename: 'public/images/spriteXHR.svg'};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);


// Load Events
// eslint-disable-next-line rule
jQuery(document).ready(() => routes.loadEvents());