// Importations
import './visualisation.css';
import './visualisation.html';
import '../annonce/annonce.js';
import '../sidebar/sidebar.js';
import './filtre.js';

// Mots clef
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

// Importer DB
import { ObjetAnnonce } from '../../api/annonces.js';
import { ImagesAnnonces } from '../../api/annonces.js';

// Affichier l'image et l'annonce
Template.visualisation.helpers({
  annoncesrecentes() {
    return ObjetAnnonce.find({}, { sort: { createdAt: -1 } });
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

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

Template.visualisation.helpers({
  annoncesanciennes() {
    return ObjetAnnonce.find({}, { sort: { createdAt: 1 } });
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

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
        filtreSelected: filtreSelected,
        createdAt: new Date(),
        idImage: idImage,
      });

      // Clear form
      target.annonceName.value = '';
      target.annoncePost.value = '';
      target.annonceCode.value = '';
      alert('Votre annonce est publiéee');
    } else {
      alert('Veuillez remplir tous les champs');
    }
  },
});
