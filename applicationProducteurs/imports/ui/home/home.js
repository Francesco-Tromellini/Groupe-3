import { Template } from 'meteor/templating';


import './home.html'

//gérer les routes en fonction du bouton sur lequel l'utilisateur clique

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


