/*———————————————————————————————————*\
    $ IMPORTS
\*———————————————————————————————————*/
import * as navbar from '../components/navbar';

export default {
  init() { // JS déclanché en premier
    // Appel des fonctions provenant des composants
    navbar.open();
    // Code perso
    console.log('Je suis dans la Homepage');
  },
  finalize() {
    // JS déclanché après le JS du init()
  },
};
