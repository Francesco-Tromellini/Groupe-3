import { Template } from 'meteor/templating';
//import { Meteor } from 'meteor/meteor';
import './filtre.html';
import { ObjetAnnonce } from '../../api/annonces';

//mettre les filtres dans une base de données
//evénement change pour select

Template.filtres.events({
    'change select' : function (event) {
        event.preventDefault();

        let selectedFilter = event.target.value;

        console.log(selectedFilter)


    }
});

