import './consVisualisation.html';
import './consVisualisation.css';
//import '../annonce/annonce.js';
import './cons_sidebar/cons_side.js';
import './consAnnonces/consAnnonces.js';

// Mots clef
import { Template } from 'meteor/templating';

//afficher l'image
Template.visualisation.helpers({
    imageFile() {
        return ImagesAnnonces.findOne();
    }
});

Template.visualisation.helpers({
    objet () {
        return ObjetAnnonce.find().fetch();
    },
});