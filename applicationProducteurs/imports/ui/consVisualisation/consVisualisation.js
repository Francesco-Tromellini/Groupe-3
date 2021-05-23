import './consVisualisation.html';
import './consVisualisation.css';
import '../annonce/annonce.js';
import './cons_sidebar/cons_side.js';
import '../../api/annonces.js';

// Mots clef
import { Template } from 'meteor/templating';

import { ObjetAnnonce } from '../../api/annonces.js';

Template.consVisualisation.helpers({
  objet() {
    return ObjetAnnonce.find({}, { sort: { createdAt: -1 } });
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});

Template.consVisualisation.helpers({
  bijoux() {
    return ObjetAnnonce.find({ filtreSelected: "bijoux"}, { sort: { createdAt: -1 } } );
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});


Template.cons_sidebar.events({
  'click #bijoux': function () {
    document.getElementById('corps').innerHTML = "";
    const filtre = document.getElementsByClassName('filtre');
    for (let j = 0; j<= filtre.length; j++) {
      filtre[j].setAttribute("hidden", "");
      if (j == 0) {
        filtre[j].removeAttribute("hidden");
      }
    }
  }
});

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
    document.getElementById('corps').innerHTML = "";
    const filtre = document.getElementsByClassName('filtre');
    for (let j = 0; j<= filtre.length; j++) {
      filtre[j].setAttribute("hidden", "");
      if (j == 1) {
        filtre[j].removeAttribute("hidden");
      }
    }
  }
});


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
    
    document.getElementById('corps').innerHTML = "";
    const filtre = document.getElementsByClassName('filtre');
    for (let j = 0; j<= filtre.length; j++) {
      filtre[j].setAttribute("hidden", "");
      if (j == 2) {
        filtre[j].removeAttribute("hidden");
      }
    }
  }
});


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
    document.getElementById('corps').innerHTML = "";
    const filtre = document.getElementsByClassName('filtre');
    for (let j = 0; j<= filtre.length; j++) {
      filtre[j].setAttribute("hidden", "");
      if (j == 3) {
        filtre[j].removeAttribute("hidden");
      }
    }
  }
});