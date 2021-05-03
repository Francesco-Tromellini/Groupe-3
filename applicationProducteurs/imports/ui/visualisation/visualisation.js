import './visualisation.css';
import './visualisation.html';
import '../annonce/annonce.js';
import '../sidebar/sidebar.js';

// Mots clef
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


// Importer DB
import { ObjetAnnonce } from '../../api/annonces.js';

Template.visualisation.helpers({
    objets () {
        return ObjetAnnonce.find({}, { sort: { createdAt: -1}});
    },
});

Template.visualisation.events({
    'submit .annonce-post'(event){

        event.preventDefault();
        // Get value from form element
        const target = event.target;
        const text =  target.annonceName.value;

        // Insert the Annonce in the collection
        Meteor.call('annonce.insert', text)
        // Clear form
        target.annonceName.value = '';
        alert('votre annonce est publiéee');
    },
});
