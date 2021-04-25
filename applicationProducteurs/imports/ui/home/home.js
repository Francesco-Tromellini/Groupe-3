import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './home.html'

import '../../../lib/routing.js';

Template.home.events({
    'click #btn3'(){
        FlowRouter.go('login');
    },
});

Template.home.events({
    'click #btn4'(){
        FlowRouter.go('signup');
    },
});
