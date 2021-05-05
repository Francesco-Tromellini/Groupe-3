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
    objet () {
        return ObjetAnnonce.find({}, { sort: { createdAt: 1}});
    },
});

Template.visualisation.events({
    'submit .annonce-post'(event){

        // Prevent default element
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        let text =  target.annonceName.value;
        let textdes = target.annoncePost.value;

        // Insert the Annonce in the collection
        Meteor.call('annonce.insert', text);
        Meteor.call('annonce.insert', textdes);

        // Clear form
        target.annonceName.value = '';
        target.annoncePost.value = '';
        alert('votre annonce est publiéee');
    },
});
