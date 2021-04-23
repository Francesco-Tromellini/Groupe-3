import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Défini les routes pour l'application les packages kadira:flow-router et kadira:blaze-layout

  // Route pour l'écran d'accueil. (avec les deux boutons : Classement et Play)
  FlowRouter.route('/', {
    name: 'home',
    action() {
      BlazeLayout.render('Home');
    },
  });

  FlowRouter.route('/login', {
    name: 'login',
    action() {
      BlazeLayout.render('login');
    },
  });

    // Route pour amener depuis l'écran d'accueil (en cliquant sur le bouton Créer un compte) jusqu'à la pag de signup
  FlowRouter.route('/signup', {
    name: 'signup',
    action() {
      BlazeLayout.render('signup');
    },
  });

  // Route pour le login
  FlowRouter.route('/LOGIN', {
    name: 'login',
    action() {
      BlazeLayout.render('login');
    },
  });

  // Route pour le signup
  FlowRouter.route('/SIGNUP', {
    name: 'signup',
    action() {
      BlazeLayout.render('signup');
    },
  });

    // Route pour amener depuis l'écran d'accueil (en cliquant sur le bouton Créer un compte) jusqu'à la pag de signup
    FlowRouter.route('/signup', {
        name: 'signup',
        action() {
          BlazeLayout.render('signup');
        },
      });
    
      // Route pour le login
      FlowRouter.route('/LOGIN', {
        name: 'login',
        action() {
          BlazeLayout.render('login');
        },
      });
    
      // Route pour le signup
      FlowRouter.route('/SIGNUP', {
        name: 'signup',
        action() {
          BlazeLayout.render('signup');
        },
      });