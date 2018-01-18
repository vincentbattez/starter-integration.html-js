console.log("ready!");

/*------------------------------------*\
    $ LIBRAIRIES
\*------------------------------------*/
import './lib/unelib';

/*------------------------------------*\
    $ LIBRAIRIES
\*------------------------------------*/
import Router from './util/Router';
import common from './common';
import homepage from './pages/homepage';

/*------------------------------------*\
    $ ROUTER
\*------------------------------------*//*
  <body class="homepage">

*/
const routes = new Router({
  // Commun
  common,
  // Toutes les autres pages
  homepage,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());