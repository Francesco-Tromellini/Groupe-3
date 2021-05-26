import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import Images from '../../../api/images.js';
import './images.html';

//retourner l'image qui est enregistrée dans le profil de l'utilsateur 
Template.uploadedFiles.helpers({
  file: function () {
    return Images.findOne({_id: Meteor.user().profile.idProfil});
  },
});

Template.uploadForm.onCreated(function () {
  //reactiveVar pour stocker des données réactives, notre fichier image ici
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    //récupérer l'image téléchargée
    return Template.instance().currentUpload.get();
  },
});

//télécharger l'image 
Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // Télécharger un seul fichier 
      // au cas ou il y en avait plusieurs sélectionnés
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Images.insert(
          {
            file: file,
            chunkSize: 'dynamic',
          },
          false
        );

        uploadInstance.on('start', function () {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function (error, fileObj) {
          if (error) {
            window.alert('Erreur durant le téléchargement : ' + error.reason);
          } else {
            window.alert('Fichier "' + fileObj.name + '" téléchargé avec succès');
          }
          template.currentUpload.set(false);
        });

        uploadInstance.start();
        //stocker des données reactives dans une variable
        Session.set("idProfil", uploadInstance.config.fileId);

      }
    }
  },
});
