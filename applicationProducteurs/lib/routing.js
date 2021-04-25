import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Défini les routes pour l'application les packages kadira:flow-router et kadira:blaze-layout

FlowRouter.route('/', {
  name: 'home',
  action() {
      BlazeLayout.render('home')
  },
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
      BlazeLayout.render('login');
  },
});

FlowRouter.route('/signup', {
  name: 'signup',
  action() {
      BlazeLayout.render('signup');
  },
});