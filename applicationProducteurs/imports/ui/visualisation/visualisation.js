// Importations
import './visualisation.css';
import './visualisation.html';
import '../annonce/annonce.js';
import '../sidebar/sidebar.js';
import './filtre.js';

// Mots clef
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

// Importer DB
import { ObjetAnnonce } from '../../api/annonces.js';
import { ImagesAnnonces } from '../../api/annonces.js';

// affichage des annonces dans l'ordre de plus au moins récent
Template.visualisation.helpers({
  annoncesrecentes() {
    return ObjetAnnonce.find({user: Meteor.user()._id}, { sort: { createdAt: -1 } });
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

// event quand on clique dans la sidebar qui affiche les annonces du plus au moins récent
Template.navigation.events({
  "click #annoncesrecentes": function recentes() {
    document.getElementById("annonceForm-wrap").setAttribute("hidden", "");
    const allannonces = document.getElementsByClassName("allannonces");
    for (let j = 0; j<= allannonces.length; j++) {
      allannonces[j].setAttribute("hidden", "");
       if (j == 0) {
        allannonces[j].removeAttribute("hidden");
      }
    }
  }
});

// affichage des annonces du plus au moins anciens
Template.visualisation.helpers({
  annoncesanciennes() {
    return ObjetAnnonce.find({user: Meteor.user()._id}, { sort: { createdAt: 1 } });
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

// event quand on clique dans la sidebar qui affiche les annonces du plus au moins anciens
Template.navigation.events({
  "click #annoncesanciennes": function anciennes() {
    document.getElementById("annonceForm-wrap").setAttribute("hidden", "");
    const allannonces = document.getElementsByClassName("allannonces");
    for (let j = 0; j<= allannonces.length; j++) {
      allannonces[j].setAttribute("hidden", "");
       if (j == 1) {
        allannonces[j].removeAttribute("hidden");
      }
    }
  }
});

// event quand on clique dans la sidebar affichage du formulaire pour créer une annonce
Template.navigation.events({
  "click #createannonce": function anciennes() {
    document.getElementById("annonceForm-wrap").removeAttribute("hidden");
    const allannonces = document.getElementsByClassName("allannonces");
    for (let j = 0; j<= allannonces.length; j++) {
      allannonces[j].setAttribute("hidden", "");
    }
  }
});



Template.visualisation.events({
  'submit .annonce-post': function (event) {
    // Prevent default element
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    let descriptionVal = target.annoncePost.value;
    let titreVal = target.annonceName.value;
    let codePostalVal = target.annonceCode.value;
    let contactVal = target.annonceContact.value;
    let filtreAnnonce = document.getElementById('filtres-select');
    let filtreSelected = filtreAnnonce.value;
    let idImage = Session.get('idImage');
    

    Session.set('idImage', '');

    // Insert the Annonce in the collection
    if (titreVal != '' && descriptionVal != '' && codePostalVal != '') {
      ObjetAnnonce.insert({
        title: titreVal,
        description: descriptionVal,
        postalCode: codePostalVal,
        contact: contactVal,
        filtreSelected: filtreSelected,
        createdAt: new Date(),
        idImage: idImage,
        user: Meteor.user()._id,
      });

      // Clear form
      target.annonceContact.value = '';
      target.annonceName.value = '';
      target.annoncePost.value = '';
      target.annonceCode.value = '';
      alert('Votre annonce est publiéee');
    } else {
      alert('Veuillez remplir tous les champs');
    }
  },
});

