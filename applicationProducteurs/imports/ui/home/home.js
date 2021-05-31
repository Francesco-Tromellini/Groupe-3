import { Template } from 'meteor/templating';


import './home.html';
import './home.css';

//gérer les routes en fonction du bouton sur lequel l'utilisateur clique

Template.home.events({
    'click #btn3'(){
        FlowRouter.go('login');
    },
    'click #btn4'(){
        FlowRouter.go('signup');
    }
});

