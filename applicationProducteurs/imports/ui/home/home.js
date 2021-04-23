//import { Template } from 'meteor/templating';
//import { FlowRouter } from 'meteor/kadira:flow-router';

import './home.html';

import '../login/login.js';
import '../signup/signup.js'
import '../../lib/lib.js';
import '../annonces/annonce.js';


// Définit les events qui se déroulent sur le template Home

/*Template.Home.events({

  // Ces boutons ne sont visibles qu'à l'utilisateur non-logué

  'click #btn3'() {
    FlowRouter.go('login');
    console.log('marche')
  },

  'click #btn4'() {
    FlowRouter.go('signup');
  },

});
*/
