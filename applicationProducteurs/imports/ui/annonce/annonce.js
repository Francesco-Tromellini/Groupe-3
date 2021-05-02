// Importer fichier
import './annonce.html';
import './annonce.css';

// Mots clef
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

// Importer DB
import { ObjetAnnonce } from '../../api/annonces.js';

Template.annonce.helpers({
    objets () {
        return ObjetAnnonce.find({});
    },
});

Template.annonce.events({
    'submit .annonce-post'(event){

        event.preventDefault();
        // Get value from form element
        const target = event.target;
        const text =  target.annonceName.value;

        // Insert the Annonce in the collection
        Meteor.call('annonce.insert', text);
    },
});

