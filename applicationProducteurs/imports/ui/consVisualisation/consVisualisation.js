import './consVisualisation.html';
import './consVisualisation.css';
import '../annonce/annonce.js';
import './cons_sidebar/cons_side.js';
import '../../api/annonces.js';

// Mots clef
import { Template } from 'meteor/templating';

import { ObjetAnnonce } from '../../api/annonces.js';

import { ReactiveVar } from 'meteor/reactive-var';

// déclarer la variable réactive
Template.consVisualisation.onCreated(function(){
  this.codePostal = new ReactiveVar( null );
})

// event pour rechercher par code postal
Template.consVisualisation.events({
  "click #rechercher": function filtreregion(event, template) {
    let input = document.getElementById('codepostal').value;
    template.codePostal.set(ObjetAnnonce.find({ postalCode: input }, { sort: { createdAt: -1 } } ));
    document.getElementById('corps').setAttribute("hidden", "");
    document.getElementById('annonceparcode').removeAttribute("hidden");
  }
});


Template.consVisualisation.helpers({
  objet() {
    return ObjetAnnonce.find({}, { sort: { createdAt: -1 } }); // affichage de toutes les annonces
  },
  annonceregion() {
    return Template.instance().codePostal.get() // récupérer les annonces qui ont le même code postal que l'input
  },
  bijoux() {
    return ObjetAnnonce.find({ filtreSelected: "bijoux"}, { sort: { createdAt: -1 } } );// affichage des annonces portant le filtre "bijoux"
  },
  vêtements() {
    return ObjetAnnonce.find({ filtreSelected: "vêtements"}, { sort: { createdAt: -1 } } ); // affichage des annonces portant le filtre "vêtement"
  },
  maraicher() {
    return ObjetAnnonce.find({ filtreSelected: "maraîcher"}, { sort: { createdAt: -1 } } ); // affichage des annonces portant le filtre "maraîcher"
  },
  poissonier() {
    return ObjetAnnonce.find({ filtreSelected: "poissonnier"}, { sort: { createdAt: -1 } } ); // affichage des annonces portant le filtre "poissonier"
  }

});

// events sur la sidebar 
Template.cons_sidebar.events({
  'click #accueil': function () {
    document.getElementById('corps').removeAttribute("hidden"); // afficher à nouveau toutes les annonces
    document.getElementById('filtrebijoux').setAttribute("hidden", "");
    document.getElementById('filtrevêtements').setAttribute("hidden", "");
    document.getElementById('filtremaraîcher').setAttribute("hidden", "");
    document.getElementById('filtrepoissonier').setAttribute("hidden", "");
  },
  'click #bijoux': function () {
    document.getElementById('filtrebijoux').removeAttribute("hidden"); // afficher à nouveau toutes les annonces
    document.getElementById('corps').setAttribute("hidden", "");
    document.getElementById('filtrevêtements').setAttribute("hidden", "");
    document.getElementById('filtremaraîcher').setAttribute("hidden", "");
    document.getElementById('filtrepoissonier').setAttribute("hidden", "");
  },
  'click #vetements': function () {
    document.getElementById('filtrevêtements').removeAttribute("hidden"); // afficher à nouveau toutes les annonces
    document.getElementById('corps').setAttribute("hidden", "");
    document.getElementById('filtrebijoux').setAttribute("hidden", "");
    document.getElementById('filtremaraîcher').setAttribute("hidden", "");
    document.getElementById('filtrepoissonier').setAttribute("hidden", "");
  },
  'click #maraicher': function () {
    document.getElementById('filtremaraîcher').removeAttribute("hidden"); // afficher à nouveau toutes les annonces
    document.getElementById('corps').setAttribute("hidden", "");
    document.getElementById('filtrebijoux').setAttribute("hidden", "");
    document.getElementById('filtrevêtements').setAttribute("hidden", "");
    document.getElementById('filtrepoissonier').setAttribute("hidden", "");
  },
  'click #poissonier': function () {
    document.getElementById('filtrepoissonier').removeAttribute("hidden"); // afficher à nouveau toutes les annonces
    document.getElementById('corps').setAttribute("hidden", "");
    document.getElementById('filtrebijoux').setAttribute("hidden", "");
    document.getElementById('filtrevêtements').setAttribute("hidden", "");
    document.getElementById('filtremaraîcher').setAttribute("hidden", "");
  },
  

});