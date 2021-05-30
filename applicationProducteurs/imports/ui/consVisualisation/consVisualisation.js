import './consVisualisation.html';
import './consVisualisation.css';
import '../annonce/annonce.js';
import './cons_sidebar/cons_side.js';
import '../../api/annonces.js';

// Mots clef
import { Template } from 'meteor/templating';

import { ObjetAnnonce } from '../../api/annonces.js';

// helpers pour récup les annonces par région
Template.consVisualisation.helpers ({
  annonceregion() {
    let input = document.getElementById('codepostal').value;
    return ObjetAnnonce.find({ postalCode: input }, { sort: { createdAt: -1 } } );
  }
});

// event pour rechercher par code postal
Template.consVisualisation.events({
  "click #rechercher": function filtreregion() {
    const annonceparcode = document.getElementById('annonceparcode');
    document.getElementById('corps').innerHTML = "";
    annonceparcode.removeAttribute("hidden");
    
  }
});

// affichage de toute les annonces
Template.consVisualisation.helpers({
  objet() {
    return ObjetAnnonce.find({}, { sort: { createdAt: -1 } });
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

Template.cons_sidebar.events({
  'click #accueil': function () {
    document.getElementById('corps').removeAttribute("hidden");
    const filtre = document.getElementsByClassName('filtre');
    for (let j = 0; j<= filtre.length; j++) {
      filtre[j].setAttribute("hidden", "");
    }
  }
});

// affichage des annonces portant le filtre "bijoux"
Template.consVisualisation.helpers({
  bijoux() {
    return ObjetAnnonce.find({ filtreSelected: "bijoux"}, { sort: { createdAt: -1 } } );
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

// évènement de clic qui n'affiche que les annonces avec le filtre bijoux (même logique pour le reste des events)
Template.cons_sidebar.events({
  'click #bijoux': function () {
    document.getElementById('corps').setAttribute("hidden", ""); // retirer l'affichage de toutes annonces
    const filtre = document.getElementsByClassName('filtre'); // récuper tous les div de la classe "filtre" dans un tableau
    for (let j = 0; j<= filtre.length; j++) { // itérer sur tous les éléments du tableau
      filtre[j].setAttribute("hidden", ""); // cacher tous les éléments de classe filtre
      if (j == 0) { // condition pour séléctionner le div correspondant à la catégorie "bijoux" 
        filtre[j].removeAttribute("hidden"); // afficher cet élément 
      }
    }
  }
});
// affichage des annonces portant le filtre "vêtement"
Template.consVisualisation.helpers({
  vêtements() {
    return ObjetAnnonce.find({ filtreSelected: "vêtements"}, { sort: { createdAt: -1 } } );
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});


Template.cons_sidebar.events({
  'click #vetements': function () {
    document.getElementById('corps').setAttribute("hidden", "");
    const filtre = document.getElementsByClassName('filtre');
    for (let j = 0; j<= filtre.length; j++) {
      filtre[j].setAttribute("hidden", "");
      if (j == 1) {
        filtre[j].removeAttribute("hidden");
      }
    }
  }
});

// affichage des annonces portant le filtre "maraîcher"
Template.consVisualisation.helpers({
  maraicher() {
    return ObjetAnnonce.find({ filtreSelected: "maraîcher"}, { sort: { createdAt: -1 } } );
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

Template.cons_sidebar.events({
  'click #maraicher': function () {
    document.getElementById('corps').setAttribute("hidden", "");
    const filtre = document.getElementsByClassName('filtre');
    for (let j = 0; j<= filtre.length; j++) {
      filtre[j].setAttribute("hidden", "");
      if (j == 2) {
        filtre[j].removeAttribute("hidden");
      }
    }
  }
});

// affichage des annonces portant le filtre "poissonier"
Template.consVisualisation.helpers({
  poissonier() {
    return ObjetAnnonce.find({ filtreSelected: "poissonnier"}, { sort: { createdAt: -1 } } );
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

Template.cons_sidebar.events({
  'click #poissonier': function () {
    document.getElementById('corps').setAttribute("hidden", "");
    const filtre = document.getElementsByClassName('filtre');
    for (let j = 0; j<= filtre.length; j++) {
      filtre[j].setAttribute("hidden", "");
      if (j == 3) {
        filtre[j].removeAttribute("hidden");
      }
    }
  }
});