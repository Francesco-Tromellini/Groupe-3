import { Template } from 'meteor/templating';


import './home.html'


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

Template.home.events({
    'click #btn5'(){
        FlowRouter.go('visualisation');
    },
});
