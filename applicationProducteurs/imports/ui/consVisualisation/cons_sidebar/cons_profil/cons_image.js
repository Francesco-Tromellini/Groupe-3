import './cons_image.html';

//mots clefs
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

//import BD
import Images from'../../../../api/images.js';

//retourner l'image qui est enregistrée dans le profil de l'utilsateur 
Template.uploadedFilesCons.helpers({
  file: function () {
    return Images.findOne({_id: Meteor.user().profile.idProfil});
  },
});

Template.uploadFormCons.onCreated(function () {
    //reactiveVar pour stocker des données réactives, notre fichier image ici
    this.currentUpload = new ReactiveVar(false);
  });